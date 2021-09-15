function ExampleConstructor() {
    console.log(Object.getPrototypeOf(this), "prototype property")
    console.log(Object.getPrototypeOf(this), "typeof prototype property")
}

var newExample = new ExampleConstructor();
console.log('newExample:', newExample);
var isInstance = newExample instanceof ExampleConstructor;
console.log('isInstance:', isInstance)
