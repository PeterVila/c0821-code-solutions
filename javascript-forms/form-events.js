var $name = document.forms[0].elements[0];
var $email = document.forms[0].elements[1];
var $message = document.forms[0].elements[2];
var $form = document.querySelector('#contact-form');

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);

$form.addEventListener('submit', formSubmit);

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}
function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('Value of ' + event.target.name + ':', event.target.value);
}

function formSubmit(event) {
  event.preventDefault();
  var values = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value
  };
  console.log(values);
}
