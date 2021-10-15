const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [{
  type: 'deposit',
  amount: 150
},
{
  type: 'deposit',
  amount: 20
},
{
  type: 'withdrawal',
  amount: 5
},
{
  type: 'deposit',
  amount: 100
},
{
  type: 'withdrawal',
  amount: 25
},
{
  type: 'withdrawal',
  amount: 60
}
];

const traits = [{
  color: 'yellow'
},
{
  type: 'electric'
},
{
  name: 'pikachu'
},
{
  level: 15
},
{
  trainer: 'ash'
}
];

const sum = (previousValue, currentValue) => previousValue + currentValue;
const product = (previousValue, currentValue) => previousValue * currentValue;
const balance = (previousValue, currentValue) => {
  if (currentValue.type === 'withdrawal') {
    return previousValue - currentValue.amount;
  } else if (currentValue.type === 'deposit') {
    return previousValue + currentValue.amount;
  }
  return previousValue;
};
const composite = (result, currentObject) => {
  return {
    ...result,
    ...currentObject
  };
};
function reduce(array, reducer, initialValue) {
  let accumulator = initialValue;
  for (var i = 0; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i]);
  }
  return accumulator;
}

console.log(reduce(numbers, (previousValue, currentValue) => previousValue + currentValue, 0));
console.log(reduce(numbers, (previousValue, currentValue) => previousValue * currentValue, 1));
console.log(reduce(account, (previousValue, currentValue) => {
  if (currentValue.type === 'withdrawal') {
    return previousValue - currentValue.amount;
  } else if (currentValue.type === 'deposit') {
    return previousValue + currentValue.amount;
  }
  return previousValue;
}, 0));

console.log(reduce(traits, (result, currentObject) => {
  return {
    ...result,
    ...currentObject
  };
}, {}));
