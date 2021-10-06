let counter = 3;
var interval = setInterval(function () {
  console.log(counter);
  if (counter === 0) {
    console.log('Blast off!');
    clearInterval(interval);
  } else {
    counter--;
  }
}, 1000);
