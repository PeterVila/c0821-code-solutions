var position = 0;
var interval = setInterval(nextSlide, 3000);

function nextSlide() {
  addPosition();
  setImg();
  circleRotation();
}

var $clickableDots = document.querySelectorAll('.fa-circle');
$clickableDots[0].addEventListener('click', function () {
  position = 0;
  setImg();
});

$clickableDots[1].addEventListener('click', function () {
  position = 1;
  setImg();
});
$clickableDots[2].addEventListener('click', function () {
  position = 2;
  setImg();
});
$clickableDots[3].addEventListener('click', function () {
  position = 3;
  setImg();
});
$clickableDots[4].addEventListener('click', function () {
  position = 4;
  setImg();
});

var photos = ['images/001.png', 'images/46.png', 'images/007.png', 'images/025.png', 'images/004.png'];

var $image = document.querySelector('img');
var $leftArrow = document.querySelector('.leftArrow');
var $rightArrow = document.querySelector('.rightArrow');

$rightArrow.addEventListener('click', function () {
  setImg();
  circleRotation();
  addPosition();
});

$leftArrow.addEventListener('click', function () {
  setImg();
  circleRotation();
  minusPosition();
});

function circleRotation() {
  for (var i = 0; i < $clickableDots.length; i++) {
    $clickableDots[i].className = 'far fa-circle';
  }
  $clickableDots[position].className = 'fas fa-circle';
}

function setImg() {
  $image.setAttribute('src', photos[position]);
  circleRotation();
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
}

function addPosition() {
  position++;
  if (position === 5) {
    position = 0;
  }
}

function minusPosition() {
  position--;
  if (position === -1) {
    position = 4;
  }
}
