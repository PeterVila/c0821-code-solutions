var noPopup = true;
var $bluebutton = document.querySelector('.blue-button');
var $redbutton = document.querySelector('.red-button');
var $modal = document.querySelector('.modal');
var $background = document.querySelector('.background-default');

$bluebutton.addEventListener('click', function () {
  if (noPopup) {
    $background.className = 'background-dim';
    $modal.className = 'modal justify-center';
  }
});

$redbutton.addEventListener('click', function () {
  if (noPopup) {
    $background.className = 'background-default';
    $modal.className = 'modal hidden justify-center';
  }
});

/*
Create a variable to indicate if there is no pop up

Query the document for the first elements with the classNames blue-button, red-button, modal, background exclusively

Add a listener for everytime the blue button is clicked,
    Set background to background-dim
    Set modal to remove visibilityclass

Add a listener for everytime the red button is clicked,
    Set background to background-ddefault
    Set modal to add visibilityclass

*/
