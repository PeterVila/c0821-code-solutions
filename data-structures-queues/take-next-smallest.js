/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  let current = queue.dequeue();
  while (true) {
    if (queue.peek() !== undefined) {
      if (current < queue.peek()) {
        return current;
      } else {
        queue.enqueue(current);
        current = queue.dequeue();
      }
    } else {
      return current;
    }
  }
}
