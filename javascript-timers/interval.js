var $h1 = document.querySelector('h1');

var change$h1 = setInterval(function () {
  $h1.textContent--;
  if ($h1.textContent === '0') {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(change$h1);
  }
}, 1000);
