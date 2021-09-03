var arr = [
  {
    isbn: '9781234567897',
    title: 'Html',
    author: 'Jon Duckett'
  },
  {
    isbn: '1544523789743',
    title: 'Css',
    author: 'Dohn Juckett'
  },
  {
    isbn: '3298230529233',
    title: 'JavaScript',
    author: 'Jonathan Ducketh'
  }
];

console.log('arr: ', arr);
console.log('type of arr: ', typeof arr);

var stringify = JSON.stringify(arr);
console.log('Json.stringify(arr):', stringify);
console.log('type of stringify:', typeof stringify);

var str = '[{"id:":"31023","name":"peter"}]';
console.log('str:', str);
console.log('typeof str:', typeof str);

var obj = JSON.parse(str);
console.log('obj = JSON.parse(str):', obj);
console.log('typeof obj:', typeof obj);
