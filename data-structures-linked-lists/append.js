/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const node = new LinkedList(value);
  if (list.next === null) {
    return;
  }
  let newEnd = list;
  let end = list.next;
  while (end.next !== null) {
    newEnd = end;
    end = end.next;
  }
  newEnd.next.next = node;
}
