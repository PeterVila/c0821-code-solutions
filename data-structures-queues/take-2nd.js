/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() !== undefined) {
    const first = queue.dequeue();
    if (queue.peek() !== undefined) {
      const second = queue.dequeue();
      queue.enqueue(first);
      return second;
    } else {
      return first;
    }
  }
}
