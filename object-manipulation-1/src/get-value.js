/* exported getValue */
function getValues(object){
    var arr = [];
    for (var key in object){
        arr.push(object[key])
    }
    return arr;
}