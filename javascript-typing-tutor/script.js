var value = 0;
var attempts = 0;
var $text = document.querySelectorAll('span');
var $score = document.querySelector('p');
var $retry = document.querySelector('button');
var $modal = document.querySelector('.modal');
var $modalText = document.querySelector('.modal-text');
var $background = document.querySelector('body');
var $opacity = document.querySelector('.text');
var $retry2 = document.querySelector('.retry2');

document.addEventListener('keydown', keyDown);
$retry.addEventListener('click', retryButton);
$retry2.addEventListener('click', modalRetry);

function keyDown(e) {
  if (e.key === $text[value].innerText) {
    $text[value].className = 'green-text';
    attempts++;
    value++;
    $score.textContent = 'Score: ' + value + '/27';
    if (value === 27) {
      $modal.className = 'modal';
      $background.className = 'background-color-off';
      $opacity.className = 'opacity text';
      $modalText.textContent = Math.round(value / attempts * 100) + '% with ' + (attempts - value) + ' errors.';
    }
  } else {
    $text[value].className = 'wrong-text under-line';
    attempts++;
  }
}

function modalRetry(e) {
  if (e) {
    value = 0;
    attempts = 0;
    $modal.className = 'modal hidden';
    $background.className = '';
    $opacity.className = 'text';
    for (var i = 0; i < $text.length; i++) {
      $text[i].className = 'text';
    }
    $score.textContent = 'Score: ' + value + '/27';

  }
}
function retryButton(e) {
  if (e) {
    value = 0;
    attempts = 0;
    for (var i = 0; i < $text.length; i++) {
      $text[i].className = 'text';
    }
    $score.textContent = 'Score: ' + value + '/27';

  }
}

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
