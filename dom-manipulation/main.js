var number = 0;
var $hot = document.querySelector('.hot-button');
var $click = document.querySelector('.click-count');

$hot.addEventListener('click', function click() {
  number++;
  $click.textContent = number;
  if (number < 4) {
    $hot.className = 'hot-button cold';
  } else if (number < 7) {
    $hot.className = 'hot-button cool';
  } else if (number < 10) {
    $hot.className = 'hot-button tepid';
  } else if (number < 13) {
    $hot.className = 'hot-button warm';
  } else if (number < 16) {
    $hot.className = 'hot-button hot';
  } else {
    $hot.className = 'hot-button nuclear';
    $click.textContent = number + ' AHHHHHHHH';
  }
});
