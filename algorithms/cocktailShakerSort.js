"use strict";
//variant of bubbleSort, go up then down.
module.exports = (arr) => {
   //assume that if no swaps then the array is sorted
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
      for(let i = arr.length; i > 0; i--){
         if (arr[i] < arr[i-1]) {
            let temp = arr[i-1];
            arr[i-1] = arr[i];
            arr[i] = temp;
            swapped = true
         }
      }
   } while (swapped)
   return arr
}
