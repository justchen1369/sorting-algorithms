"use strict";
//variant of bubbleSort, go up then down.
module.exports = (arr) => {
   let sortedAndReady = false
   while(!sortedAndReady){ //not sure what variable to use
      let sorted = true     //and while true seems a bit like it could go wrong
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
           sortedAndReady = true
         }
      }
   }
   return arr
}
