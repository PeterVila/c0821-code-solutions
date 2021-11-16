/* exported maxValue */

function maxValue(stack) {
  const arr = [];

  while (stack.peek() !== undefined) {
    arr.push(stack.pop());
  }
  return Math.max(...arr);
}
