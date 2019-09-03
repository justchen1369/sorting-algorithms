"use strict";
//variant of bubbleSort, go up then down.
module.exports = (arr) => {
   let sortedAndReady = false
   while(true){
      let sorted = true
      for(let i=0; i < (arr.length); i++){
         if (arr[i] > arr[i+1]) {
            let temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
            sorted = false
         }
         for(let i = arr.length; i > 0; i--){
            if (arr[i] < arr[i-1]) {
               let temp = arr[i-1];
               arr[i-1] = arr[i];
               arr[i] = temp;
               sorted = false
            }
         }
         if(sorted){
           return arr
         }
      }
   }
}
