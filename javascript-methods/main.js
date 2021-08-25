var numberOne = 13;
var numberTwo = 25;
var numberThree = 49;

var maximumValue = Math.max(numberOne, numberTwo, numberThree);
console.log('Math.max() on threeNumbers:', maximumValue);

var heroes = ['Spoooderman', 'Batman', 'The Detachable Kid', 'Lonk'];
var randomNumber = Math.random();
console.log('randomNuber:', randomNumber);

randomNumber *= heroes.length;
console.log('randomNumber * heroes.length:', randomNumber);

var randomIndex = Math.floor(randomNumber);
console.log('After Math.floor():', randomIndex);

var randomHero = heroes[randomIndex];
console.log('Random Hero:', randomHero);

var library = [{ title: 'HTML', author: 'Duckett' }, { title: 'CSS', author: 'Duckett' }, { title: 'Life of Pi', author: 'Yann Martel' }];
var lastBook = library.pop();
console.log('Last Book of library', lastBook);
var firstBook = library.shift();
console.log('First Book of Library', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
console.log('Shifted js(end of library):', library);
library.unshift(css);
console.log('Unshifted css(beginning):', library);

library.splice(1, 1);
console.log('Spliced middle value:', library);

var fullName = 'Peter Vila';
var firstAndLastName = fullName.split(' ');
console.log('fullName splitted:', firstAndLastName);
var firstName = firstAndLastName[0];
console.log('First Element of firstAndLastName:', firstName);
var sayMyName = firstName.toUpperCase();
console.log('firstName uppercased:', sayMyName);
