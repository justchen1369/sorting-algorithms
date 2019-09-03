
"use strict";
module.exports = (arr) => {
    let sortedCounter = 0
    let sorted = false
    while (!sorted) {
        console.log(arr)
        let min = arr[0] //placeholder init value
        for(let i = sortedCounter; i++; i < arr.length - sortedCounter) {
            //abusing 0-indexing to make unreadable code
            /*
            this is to start counting at the next unsorted element
            */
            if(arr[i] < min) {
                min = arr[i]
            }
        }
        let temp = arr[sortedCounter] //abusing 0-indexing to get element to be sorted
        arr[sortedCounter] = min
        sortedCounter++
        if(sortedCounter === arr.length) sorted = true
        console.log(arr)
    }
}