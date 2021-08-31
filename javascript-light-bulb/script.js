var off = false;
var $body = document.querySelector('.background-color-off');
var $lightBulb = document.querySelector('.light-bulb-off');

$lightBulb.addEventListener('click', function () {
  if (off) {
    off = false;
    $lightBulb.className = 'light-bulb-on';
    $body.className = 'background-color-on';
  } else {
    off = true;
    $lightBulb.className = 'light-bulb-off';
    $body.className = 'background-color-off';
  }
});

/*
Set a variable to indicate if on or off, so False for default.
Query the className background-color-off element and set to variable $body
Query by className light-bulb-off to var $lightBulb

For every click event, follow up with code

    if (the value for off is "false";
        Set off to true;
        Set the lightBulb to light-bulb-off
        Set the body element to background-off
    else
        Set off to false;
        Set lightbulb to light-bulb-ON
        Set body element to background-on

*/
