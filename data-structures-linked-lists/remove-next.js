/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return null;
  }
  if (list.next) {
    list.next = list.next.next;
  }
}
