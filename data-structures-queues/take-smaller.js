/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() !== undefined) {
    const first = queue.dequeue();
    if (queue.peek() > first) {
      const second = queue.dequeue();
      queue.enqueue(second);
      return first;
    } else if (queue.peek() === first) {
      queue.enqueue(first);
      queue.dequeue();
      return first;
    } else if (queue.peek() < first) {
      const second = queue.dequeue();
      queue.enqueue(first);
      return second;
    } else {
      return first;
    }
  }
}
