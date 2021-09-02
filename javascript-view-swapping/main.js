var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', tabSwitch);

function tabSwitch() {

  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabList.length; i++) {
      if ($tabList[i] === event.target) {
        $tabList[i].className = 'tab active';
      } else {
        $tabList[i].className = 'tab';
      }
    }
  }

  if (event.target) {
    var attr = event.target.getAttribute('data-view');
    for (var x = 0; x < $viewList.length; x++) {
      if ($viewList[x].getAttribute('data-view') === attr) {
        $viewList[x].className = 'view';
      } else {
        $viewList[x].className = 'view hidden';

      }
    }
  }
}
