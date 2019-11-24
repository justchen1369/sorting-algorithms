<<<<<<< HEAD
  "use strict";
=======
"use strict";
>>>>>>> 61841e303a8b8095fe1ce81b8d9df521ba457ea2
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
