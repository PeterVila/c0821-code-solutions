/* exported equal */

function equal(first, second){
    if (first.length !== second.length){
        return false;
    }
    for(var i = 0; i < first.length; i++){
        if (first[i] !== second[i]){
            return false;
        }
    }

    return true;

}

/*
input: first(array)
        second(array)
Output: Boolean indicated if both arrays are equal (index-for-index);

If the length of the first arary is not equal to the second,
    return false

Go through every positiojn in each of our lists
    If the value doesn't match, return false

Return true, since none of the tests above failed.
*/