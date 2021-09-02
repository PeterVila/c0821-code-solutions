var $taskList = document.querySelector('.container');
console.log($taskList);

function eventTarget(event) {
  console.log('event.target', event.target);
  console.log('event.target.name', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    console.log('Closest: ', event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  }
}

$taskList.addEventListener('click', eventTarget);
