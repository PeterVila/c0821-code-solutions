var value = 0;
var attempts = 0;
var $text = document.querySelectorAll('span');
var $score = document.querySelector('p');

document.addEventListener('keydown', function (e) {
  if (e.key === $text[value].innerText) {
    $text[value].className = 'green-text';
    attempts++;
    value++;
    $score.innerHTML = 'Score: ' + value + '/27';
    if (value === 27) {
      alert('Your typing % is: ' + Math.round(27 / attempts * 100) + ' %');
    }
  } else {
    $text[value].className = 'wrong-text under-line';
    attempts++;
  }

  $text[value + 1].className = 'underline';

});

/*
Make a container for value(this will indicate which key we are on)
Make a container for total attempts (right + wrong);

Query the dom for the spans and for a p element which is our text

Add an event listener to record keydowns, if the key pressed down is equal to the curent value we are at in the text,
    Make it green, increase attemps and values by 1
    Update our innerHTML.
    If the value reaches 25, then we alert what our % was
If the key pressed down is wrong,
    Turn the value into red text
    Increase attempts by 1.
*/
