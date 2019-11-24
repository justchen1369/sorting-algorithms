"use strict";
//variant of bubbleSort, move pointer up, then back down 
//in order to enable low-downers near the end to go to the end.
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
