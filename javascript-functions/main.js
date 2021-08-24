function convertMinutestoSeconds(minutes) {
  return minutes * 60;
}

var seconds = convertMinutestoSeconds(30);
console.log('convertMinutestoSeconds(30):', seconds);

function greet(name) {
  return 'Hey, ' + name;
}
console.log("greet('Billy'): ", greet('Billy'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('getArea: 20 * 30', getArea(20, 30));

function getFirstName(person) {
  return person.firstName;
}
console.log('getFirstName(Eren Yeager):', getFirstName({ firstName: 'Eren', lastName: 'Yeager' }));

function getLastElement(array) {
  return array[array.length - 1];
}
console.log('Last Element of Array:', getLastElement([1, 2, 3, 4, 5]));
