var off = 0;
var $body = document.querySelector('.background-color-off');
var $lightBulb = document.querySelector('.light-bulb-off');

$lightBulb.addEventListener('click', function () {
  off++;
  if (off % 2 === 0) {
    $lightBulb.className = 'light-bulb-off';
    $body.className = 'background-color-off';
  } else {
    $lightBulb.className = 'light-bulb-on';
    $body.className = 'background-color-on';
  }
});

/*
Set a counter to equal 0 (signaling off);
Query the className background-color-off element and set to variable $body
Query by className light-bulb-off to var $lightBulb

For every click event, follow up with code
    Increase the value of off by 1;
    if (the value of off is an even number (which is default);
        Set the lightBulb to light-bulb-off
        Set the body element to background-off
    else
        Set lightbulb to light-bulb-ON
        Set body element to background-on

*/
