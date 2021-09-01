/* exported zip */
function zip(first,second){
    var output = [];
    var avg = Math.floor((first.length + second.length)/2);
    for (var i = 0; i< avg; i++){
        output.push([first[i]])
       
    }

    for (var x = 0; x < avg; x++){
        if(output[x].length < 2){
            output[x].push(second[x])
        } 
    }

    return output;
}

/*
Input: Takes in 2 lists
Output: Combine each array, but in the new lists, the values are pairs of values from equal positions from the first.

Go through every value in our first list,
    Add each value to a new list but in an array
Go through every value of our secondList
    if (output[x].length <= 2){
        output[x].push(second[x])
    }
*/