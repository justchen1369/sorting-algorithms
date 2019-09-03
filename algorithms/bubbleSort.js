"use strict";
module.exports = (arr) => {
  while(true){ //not sure what variable to use
    let sorted = true     //and while true seems a bit like it could go wrong
    for(let i=0; i < (arr.length); i++){
    if (arr[i] > arr[i+1]) {
      let temp = arr[i+1];
      arr[i+1] = arr[i];
      arr[i] = temp;
      sorted = false
    }
  }
  if (sorted === true) {
      return arr
    }
  }
}
