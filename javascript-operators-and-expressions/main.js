var width = 10;
var height = 15;
var area = width * height;
console.log('Value of area:', area);
console.log('Value type of area:', typeof area);

var bill = 55.45;
var payment = 60;
var change = payment - bill;
console.log('Value of change:', change);
console.log('Value type of change:', typeof (change));

var quizzes = 10;
var midterm = 50;
var final = 90;
var grade = (quizzes + midterm + final) / 3;
console.log('Value of grade:', grade);
console.log('Value type of grade:', typeof grade);

var firstName = 'Peter';
var lastName = 'Vila';
var fullName = firstName + ' ' + lastName;
console.log('Value of fullName:', fullName);
console.log('Value type of fullName:', typeof fullName);

var pH = 9;
var isAcidic = pH < 7;
console.log('Is pH acidic?', isAcidic);
console.log('Value type of:', typeof isAcidic);

var headCount = 300;
var isSparta = headCount === 300;
console.log('Is it Sparta?', isSparta);
console.log('Value type of isSparta:', typeof (isSparta));

var motto = fullName;
motto = motto + ' is the GOAT';

console.log('Value of motto:', motto);
console.log('Value type of motto:', typeof motto);
