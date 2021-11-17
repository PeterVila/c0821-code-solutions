/* exported updateNext */

function updateNext(list, value) {
  if (list.next === null) {
    return null;
  }
  if (list.next) {
    list.next.data = value;
  }
}
