## Shuffle

배열의 수를 섞고 싶을 때 쓰는 방법

1. 배열의 끝에서 부터 수를 선택하고

2. 그 수의 자릿수만큼의 랜덤한 숫자를 하나 뽑아

3. 그 자리의 숫자와 위치를 바꾼다.

```js
function shuffle(arr) {
  var random;
  for(var i = arr.length-1; i > 0; i--) {
    random = Math.floor(Math.random() * (i+1));
    swap(arr, i, random);
  }
}

function swap(arr, i, random) {
  var temp = arr[i];
  arr[i] = arr[random];
  arr[random] = temp;
}
```