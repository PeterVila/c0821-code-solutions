var position = 0;
var interval = setInterval(nextSlide, 3000);

function nextSlide() {
  addPosition();
  setImg();
}

var photos = ['images/001.png', 'images/46.png', 'images/007.png', 'images/025.png', 'images/004.png'];

var $image = document.querySelector('img');
var $leftArrow = document.querySelector('.leftArrow');
var $rightArrow = document.querySelector('.rightArrow');

$rightArrow.addEventListener('click', function () {
  setImg();
  addPosition();
});

$leftArrow.addEventListener('click', function () {
  setImg();
  minusPosition();
});

function setImg() {
  $image.setAttribute('src', photos[position]);
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
  otherDots();
  $dots[position].className = 'fas fa-circle';
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

var $dots = document.querySelectorAll('.fa-circle');
for (var i = 0; i < $dots.length; i++) {
  $dots[i].addEventListener('click', function () {
    position = event.target.getAttribute(['data-view']);
    setImg();
    otherDots();
    $dots[position].className = 'fas fa-circle';
  });
}

function otherDots() {
  for (var z = 0; z < $dots.length; z++) {
    $dots[z].className = 'far fa-circle';
  }
}
