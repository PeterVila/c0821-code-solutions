/* exported unique */
function unique(array){
    var obj = {}
    var arrCheck = [];
    var output = [];
    for (var key in array){
        obj[array[key]] = key
    }
    for (var check in obj){
        if (check === "false"){
            arrCheck.push(false)
        } else if (check === "true"){
            arrCheck.push(true)
        } else {
            arrCheck.push(check);

        }
    }
    console.log(obj)
    console.log(arrCheck);

    
}