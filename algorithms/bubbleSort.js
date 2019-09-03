"use strict";
module.exports = (arr) => {
   let swapped = true
   do {
      swapped = false
      for(let i=0; i < (arr.length); i++){
         if (arr[i] > arr[i+1]) {
            let temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
            swapped = true
         }
      }
   } while (swapped)
   return arr
}
