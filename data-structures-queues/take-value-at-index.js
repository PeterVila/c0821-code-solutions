/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  for (let i = 0; i < index; i++) {
    const front = queue.dequeue();
    queue.enqueue(front);
  }
  const front = queue.dequeue();
  return front;
}
