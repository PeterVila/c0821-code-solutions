/* exported isPalindromic */
function isPalindromic(string){
    var continueTrue = true;
    for(var i = 0; i < string.length; i++){
        if(string[i] !== string[string.length - (i+1)]){
          if (string[i] === " " || string[string.length - (i+1)] === " "){
            return continueTrue; 
          } else {
              return false;
          }
        } else {
            continueTrue = true;
        }
    }
    return true;
}

/*
Input: Takes in a text value
Output: Returns true or false if the text is a palindrome. (Which means same characters back and forth
    )
Go through each value of the string[
    Check if string at that position is the same as that position from the end of the string.
        If false, return false;
]


*/