var student = {
  firstName: 'Peter',
  lastName: 'Vila',
  age: 23
};
console.log('Value of student:', student);
var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of student.fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Professional Couch Potato';

console.log('Value of student.livesInIrvine:', student.livesInIrvine);
console.log('Value for student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Toyota',
  model: 'C-HR',
  year: 2019
};

vehicle['color'] = 'Dark Grey';
vehicle['isConvertible'] = false;

console.log("Value of vehicle['color']:", vehicle['color']);
console.log("Value of is vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('Value of vehicle:', vehicle);

var pet = {
  name: 'Teddy',
  type: 'Pomeranian'
};

delete pet.name;
delete pet.type;
console.log('Value of pet:', pet);
