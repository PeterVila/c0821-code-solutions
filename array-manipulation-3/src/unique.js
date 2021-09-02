/* exported unique */
function unique(array){
    var obj = {}
    var output = []
    for (var i = 0; i <array.length; i++){
        obj[array[i]] = array[i]
    }
    console.log(obj)
    for (var x = 0; x < array.length; x++){
        for (var key in obj){
            if (obj[key] === array[x]){
                output.push(array[x])
                x++;
                delete obj[key]
            }
        }
    }
    return output;
}