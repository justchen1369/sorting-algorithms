"use strict";
module.exports = (arr) => {
   let swapped = true
   let iterations = 0
   do {
      swapped = false
      for(let i=0; i < (arr.length - iterations); i++){
         if (arr[i] > arr[i+1]) {
            let temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
            swapped = true
         }
      }
      iterations++
   } while (swapped)
   return arr
}
