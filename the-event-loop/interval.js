let counter = 3;
var interval = setInterval(function () {
  if (counter === 0) {
    console.log('Blast off!');
    clearInterval(interval);
  } else {
    console.log(counter);
    counter--;
  }
}, 1000);
