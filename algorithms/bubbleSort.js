"use strict";
module.exports = (arr) => {
  while(true){
    let sorted = true
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
