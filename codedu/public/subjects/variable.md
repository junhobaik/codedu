#### remove()

db.COLLECTION_NAME.remove(criteria, justOne)

- Criteria : 삭제할 데이터의 기준 값, 이 값이 {}면 collection의 모든 데이터를 제거한다.
- justOne : boolean, optional, 기본값 false로 조건 성립 모두 제거, true면 1개의 document만 제거


---



### find()

db.COLLECTION_NAME.find(query, projection)

- query : optional, document 조회시 기준을 정함
  - [Operator Documentation][https://docs.mongodb.com/manual/reference/operator/query/]
- Projection : optional, document를 조회할때 보여질 field를 정함
  - `db.articles.find( { } , `
    `{ “_id”: false, “title”: true, “content”: true } )`
    articles의 title과 content만 조회한다.



#### 비교(Comparison 연산자)

| operator | 설명                                       |
| -------- | ---------------------------------------- |
| $eq      | (equals) 주어진 값과 일치하는 값                   |
| $gt      | (greater than) 주어진 값보다 큰 값               |
| $gte     | (greather than or equals) 주어진 값보다 크거나 같은 값 |
| $lt      | (less than) 주어진 값보다 작은 값                 |
| $lte     | (less than or equals) 주어진 값보다 작거나 같은 값   |
| $ne      | (not equal) 주어진 값과 일치하지 않는 값             |
| $in      | 주어진 배열 안에 속하는 값                          |
| $nin     | 주어빈 배열 안에 속하지 않는 값                       |



#### 논리연산자

| operator | 설명                         |
| -------- | -------------------------- |
| $or      | 주어진 조건중 하나라도 true 일 때 true |
| $and     | 주어진 모든 조건이 true 일 때 true   |
| $not     | 주어진 조건이 false 일 때 true     |
| $nor     | 주어진 모든 조건이 false 일때 true   |



#### $where 연산자

자바스크립트 표현식을 쓸 수 있다.

`db.collection_name.find({$where: 'this.comments.length==0'})`




```Js
> db.books.find().pretty() //멀티라인으로 보기 좋게 출력된다

> db.number.find({'value':56}) //value가 56인 document 조회
> db.number.find({'value':{$gt: 100}}) 
//value가 100보다 큰 documet 조회
> db.number.find({'value':{$gt:0, $lt:100}}) // 0-100
> db.number.find({'value':{$gt:0, $lt:100, $nin:[12,33]}})
//0-100이고 12,33이 아닌


> db.articles.find({
  $or: [{"title": "article01"},{"writer": "Alpha"}]
  }) //title=='article' || writer=='Alpha'
> db.articles.find({ 
  $and: [{"writer": "Velopert"}, {"likes": { $lt: 10 }}]
  }) 
> db.articles.find({ 
  "writer": "Velopert", "likes": { $lt: 10 } 
  }) //and 의 경우엔 이렇게도 가능

```



---



### Sort, limit, skip, update ()



#### update()

```js
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)
```

- query : 업데이트할 document의 criteria를 정한다. (find의 query와 동일)
- Update : document에 적용할 변동사항
- Upset : boolean, optional / true면 query에 맞는 document가 없으면 새로운 document를 추가하게 된다.
- Multi : boolean, optional / true면 여러개의 document를 수정한다
- writeConcern : optional / [documentation][https://docs.mongodb.com/v3.2/reference/write-concern/]



```js
> db.numbers.find().sort({"value": 1}) //오름차순 정렬
> db.numbers.find().sort({"value": -1}) //내림차순 정렬

> db.numbers.find().limit(3) //3개만 보여준다

> db.number.find().skip(2) //보여줄 데이터에서 2개를 생략해 보여줌

> db.people.update({name: "Abet"}, {$set: {age: 20}})
  //name이 abet인 age를 20으로 수정

> db.people.update({name: "Betty"}, {"name": "Betty 2", age: 1}) 
  //Betty document를 새로운 document로 대체한다.
  //set을 안쓰면 이렇게 된다, id는 유지된다.

> db.people.update({name:"David"}, {$unset:{score:1}})
  // David document의 score 필드 제거

> db.people.update({name:"Elly"}, {name:"Elly",age:17}, {upsert:true}) 
  //upsert 옵션을 설정하여 Elly document가 존재하지 않으면 새로 추가

> db.people.update(
    { name: "Charlie" },
    { $push: { skills: "angularjs" } }
    )
  //Charlie document의 skills 배열에 angularjs 추가

> db.people.update(
    { name: "Charlie" },
    { $push: {
        skills: {
            $each: [ "c++", "java" ],
            $sort: 1
        }
      }
    }
  )
  //Charlie document의 skills에 "c++" 와 "java" 를 추가하고 알파벳순으로 정렬

> db.people.update(
    { name: "Charlie" },
    { $pull: { skills: "mongodb" } }
 ) //Charlie document에서 skills 값의 mongodb 제거

> db.people.update(
    { name: "Charlie" },
    { $pull: { skills: { $in: ["angularjs", "java" ] } } }
)// Charlie document에서 skills 배열 중 "angularjs" 와 "java" 제거
```