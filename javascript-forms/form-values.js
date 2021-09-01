var $form = document.querySelector('#contact-form');
$form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  var values = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value
  };
  console.log(values);
  $form.reset();
}
