/* exported toObject */

function toObject(keyValuePair){
    var obj = {};

    obj[keyValuePair[0]] = keyValuePair[1];


    return obj;
}
/*
Input: Takes in a list ([string, random value]);
Output: Return an object with the string being the property and random value the value
    

*/
