"use strict";
let algorithms = require('require-all')(__dirname + '/algorithms')

for(let keys in algorithms) {
  let array = [9,8,7,6,5,4,3,2,1]
  let sortedArray = array.sort()
  if(algorithms[keys](array) === sortedArray){
    console.log('Sorting sucessful with ' + keys)
  } else {
    console.log(`ERROR! ALGORITHM ${keys} RETURNED ${algorithms[keys](array)}!`)
  }
}
