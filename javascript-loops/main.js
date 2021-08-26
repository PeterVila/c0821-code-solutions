/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log('While loop: 1-10:', getNumbersToTen());
console.log('Repeat: While loop: 1-10:', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('While loop: 2-20:', getEvenNumbersToTwenty());
console.log('Repeat: While loop: 2-20:', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log('repeatWord:', repeatWord('bird ', 10));
console.log('Second repeatWord:', repeatWord('bird ', 10));

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

console.log('logEachCharacter:', logEachCharacter('Pneumonoultramicroscopicsilicovolcanoconiosis'));
console.log('logEachCharacter:', logEachCharacter(''));
console.log('logEachCharacter:', logEachCharacter('Peter Vila'));
console.log('logEachCharacter:', logEachCharacter('Spaces are characters too.'));

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubleAll:', doubleAll([3, 2, 5]));
console.log('doubleAll:', doubleAll([5, 10, 15]));

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}

console.log('getKeys:', getKeys({ key1: 'value1', key2: 'value2', key3: 'value3' }));
console.log('getKeys:', getKeys({ firstName: 'peter', lastName: 'vila' }));

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}

console.log('getValues:', getValues({ key1: 'value1', key2: 'value2', key3: 'value3' }));
console.log('getKeys:', getValues({ firstName: 'peter', lastName: 'vila' }));
