var position = 0;

var interval = setInterval(nextSlide, 3000)


function nextSlide(){
    addPosition();
    setImg();
    circleRotation();
    if (position === 4) {
      setTimeout(function () {
        position = 0;
        setImg();
        circleRotation()
      }, 1500)
    }
}

var $clickableDots = document.querySelectorAll('.fa-circle')
$clickableDots[0].addEventListener('click', function(){
    position = 0;
    setImg();
    circleRotation();
})

$clickableDots[1].addEventListener('click', function(){
    position = 1
    setImg();
    circleRotation();
})
$clickableDots[2].addEventListener('click', function () {
    position = 2
    setImg();
    circleRotation();
})
$clickableDots[3].addEventListener('click', function () {
    position = 3
    setImg();
    circleRotation();
})
$clickableDots[4].addEventListener('click', function () {
    position = 4
    setImg();
    circleRotation();
})

var photos = ["images/001.png", "images/46.png", "images/007.png", "images/025.png", "images/004.png"]

var $image = document.querySelector('img')
var $leftArrow = document.querySelector('.leftArrow');
var $rightArrow = document.querySelector('.rightArrow')


$rightArrow.addEventListener('click', function(){
    setImg();
    circleRotation();
    addPosition();
})


$leftArrow.addEventListener('click', function () {
  setImg();
  circleRotation();
  minusPosition();
})

function circleRotation(){
    for (var i = 0; i < $clickableDots.length; i++) {
      $clickableDots[i].className = "far fa-circle"
    }
    $clickableDots[position].className = "fas fa-circle";
}

function setImg(){
    $image.setAttribute('src', photos[position])
}

function addPosition(){
    if (position < 4) {
      position++;
    }
}

function minusPosition(){
  if (position > 0) {
    position--;
  }
}
