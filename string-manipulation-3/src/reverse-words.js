/* exported reverseWords */
function reverseWords(string){
    currentWord = "";
    output = ""
    outputWithoutSpace = ""
    for (var i = 0; i < string.length; i++){
        if (string[i] === " "){
            currentWord += " ";
            for (var j = currentWord.length - 1; j >= 0; j--){

                output += currentWord[j];
            }
            currentWord = "";
        } else {
            currentWord += string[i]
        }
    }
    output += " "
    for (var x = currentWord.length-1; x >= 0; x--){
        output += currentWord[x];
    }
    // console.log(output);
    
    for (var x = 1; x < string.length + 1; x++){
        outputWithoutSpace += output[x]
    }
    // console.log(outputWithoutSpace)
    return outputWithoutSpace
}

/*
Input: Any Javascript String
Output: String in order but characters in reverse order
*/