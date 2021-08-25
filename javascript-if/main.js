/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
     if (number < 5) {
         return true;
     } else {
         return false;
     }
 }
console.log("Testing isUnderFive(4):", isUnderFive(4));

function isEven(number) {
     if (number % 2 === 0) {
         return true;
     } else {
         return false;
     }
 }
console.log("isEven(6):", isEven(5));

function startsWithJ(string) {
    if (string[0] === 'j' || string[0] === 'J') {
        return true;
    } else {
        return false;
    }
}
console.log("startsWithJ('jello')", startsWithJ('jello'));

function isOldEnoughToDrink(person) {
    if (person.age >= 21) {
        return true;
    } else {
        return false;
    }
}
var bob = {
    name: 'bob',
    age: '20'
};
console.log('Is Bob old enough to drink?', isOldEnoughToDrink(bob));

function isOldEnoughToDrive(person) {
    if (person.age >= 16) {
        return true;
    } else {
        return false;
    }
}
console.log('Is Bob old enough to drive?', isOldEnoughToDrive(bob));

function isOldEnoughToDrinkAndDrive(person) {
    if (person) {
        return false;
    } else {
        return false;
    }
}
console.log("Are you old enough to drink and drive?", isOldEnoughToDrinkAndDrive(21));

function categorizeAcidity(pH) {
    if (pH === 7) {
        return "neutral";
    } else if (pH < 7) {
        return "acid";
    } else if (pH > 7) {
        return "base";
    } else {
        return "invalid pH level"
    }
}
console.log("What is the pH type of 8?", categorizeAcidity(8));

function introduceWarnerBro(name) {
    if (name === "yakko" || name === "wakko") {
        return "We're the warner brothers";
    } else if (name === "dot") {
        return "I'm cute~";
    } else {
        return "Goodnight everybody!"
    }
}

console.log("Testing Examples: yakko, dot, cody");
console.log(introduceWarnerBro('yakko'));
console.log(introduceWarnerBro('dot'));
console.log(introduceWarnerBro('cody'));
