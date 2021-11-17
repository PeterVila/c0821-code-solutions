/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const first = queue.dequeue();
    return queue.enqueue(first);
  }
}
