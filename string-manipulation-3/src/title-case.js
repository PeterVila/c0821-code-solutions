/* exported titleCase */
function titleCase(title){
    var titleLower = title.toLowerCase();

    var currentWord = title[0].toUpperCase();
    var output = ''

    for (var i = 1; i < titleLower.length; i++){
        if (titleLower[i] === " " || i === titleLower.length -1){
            currentWord += titleLower[i]
            if (currentWord === 'javascript') {
                output += 'JavaScript ';
                currentWord = '';
            } else if (currentWord.length >= 4){
                output += currentWord[0].toUpperCase(0);
                for (var j = 1; j < currentWord.length; j++){
                    output += currentWord[j]
                }
                currentWord = ''
            } else if (currentWord === 'api') {
                output += 'API'
                currentWord = '';
            } else {
                output += currentWord.toLowerCase();
                currentWord = '';
            }
        } else if (titleLower[i] === "-"){
            currentWord += titleLower[i];
            currentWord += titleLower[i+1].toUpperCase();
            i++;
        } else if (titleLower[i] === ":"){
            currentWord += titleLower[i];
            currentWord += " "
            currentWord += titleLower[i+2].toUpperCase();
            i += 2;
        } else {
            currentWord += titleLower[i].toLowerCase();
            if (i === titleLower.length){
                output += currentWord;
            }
        }
    }
    return output;
}

/*
Input: a string representing a book Title
Output: The original title but with "APA Title Case Style" applied

Make a container containing curentWord.
Go through every character (after the first) of the titleString; ex)professional JavaScript for web developers
    If the character is a space (" "); 
        Add string[i] to currentWord,
        if (currentWord === 'javascript')
            Add currentWord to output.
            increase i by 10
            empty currentWord
        else if (currentWord.length >= 4){
            Add currentWord[0] to output
            Go through rest of character and add
        }
        else if (currentWord === 'api') {
            Add currentWord to output
            Increase i to 3
            reset currentWord
        }
        go through every character of currentWord;
            -
        concatenate output += currentWord;
    else, add the character to currentWord

*/