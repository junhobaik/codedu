## 테스트용


```js
function test(arr) {
  var random;
  for(var i = arr.length-1; i > 0; i--) {
    random = Math.floor(Math.random() * (i+1));
    swap(arr, i, random);
  }
}
```