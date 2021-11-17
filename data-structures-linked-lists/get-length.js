/* exported getLength */

function getLength(list) {
  let count = 1;
  if (list.next !== null) {
    let end = list.next;
    count++;
    while (end.next !== null) {
      end = end.next;
      count++;
    }
  }
  return count;
}

/*
Initalize our count
Check if the next list exists
Set a variable to equal the next value of the list
Increase our count by 1; //2
While end.next is true; change the value of end to end.next
  Increment count
*/
