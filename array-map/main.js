const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(number => number * 2);
console.log(doubled);

const prices = numbers.map(number => `$${number}.00`);
console.log(prices);

const upperCased = languages.map(language => language.toUpperCase());
console.log(upperCased);

const firstLetters = languages.map(letter => letter[0]);
console.log(firstLetters);

function map(array, transform) {
  const ouput = [];
  for (let i = 0; i < array.length; i++) {
    ouput.push(transform[i]);
  }
  return ouput;
}
console.log(map(numbers, doubled));
console.log(map(numbers, prices));
console.log(map(languages, upperCased));

/*
Create an empty array ouput
Loop through array elements.
Call function transform with the current element as the argument.
Push the result of the mapFunc
function to the mapArr array.
Return the mapArr array after going through all the elements.
*/
