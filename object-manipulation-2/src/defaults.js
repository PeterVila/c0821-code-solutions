/* exported defaults */
function defaults(target, source) {
  var sourceKeys = []; //has Our Values from source
  

  for (var key in source){
    sourceKeys.push(key);
  }
  for (var i = 0; i < sourceKeys.length; i++){
    for(var key2 in target){
      if (key2 === sourceKeys[i]){
          delete source.key2;
      }
    }
  }

  for (var key3 in source){
    if(key3 !== target[key3]){
      target[key3] = source[key3];
    }
  }

  console.log("sourceKeys:",sourceKeys);
  console.log("source:", source);
  console.log("target:", target);
}
/*
Input: Takes in a object to be editted. Takes in an object to be looked over
Output: A new object that adds the missing properties our to-be-edited object with the source object.

Create a container for our source property Keys.
Create a container for keys that our target is missing

Go through each value in source object and grab the keys and put them into sourceKeys
Go through each value in our sourceKeys list and if the value matches it, delete from source

*/
