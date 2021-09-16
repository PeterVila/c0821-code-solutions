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

//Query for all balls
//event-target

$balls = document.querySelectorAll('.fa-circle')

for (var i = 0; i < $balls.length; i++){
  $balls[i].addEventListener('click', function () {
    position = $balls[i].getAttribute('data-view')
  })
}