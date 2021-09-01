/* exported isAnagram */
function isAnagram(firstString, secondString){
    var noSpaceFirst = [];
    var noSpaceSecond = [];
    
    for (var i = 0; i < firstString.length; i++){
        if (firstString[i] !== " "){
            noSpaceFirst.push(firstString[i]);
        }
    }
    noSpaceFirst.sort();
    // console.log(noSpaceFirst)
    for (var j = 0; j < secondString.length; j++) {
        if (secondString[j] !== " ") {
            noSpaceSecond.push(secondString[j]);
        }
    }
    noSpaceSecond.sort();
    // console.log(noSpaceSecond);

    for(var x = 0; x < noSpaceFirst.length; x++){
        if(noSpaceFirst[x] !== noSpaceSecond[x]){
            return false;
        } 
    }
    return true;
}



/* Parameters
Input: firstString - any JavaScript String 
       secondString - any JavaScript String
Ouput: A Boolean indicating whether or not secondString is an anagram of firstString.

Turn firstString values into properties of an object

Go through each value of firstString list, if nameofproperty === firstString[i], add 1 to that number.

*/