"use strict";
let algorithms = require('require-all')(__dirname + '/algorithms')

for(let keys in algorithms) {
  let array = [9,8,7,6,5,4,3,2,1]
  if(algorithms[keys](array) === array.sort()){
    console.log('Sorting sucessful with ' + keys)
  } else {
    console.log(`ERROR! ALGORITHM ${keys} RETURNED ${algorithms[keys](array)}!`)
  }
}
for(let keys in algorithms) {
  let sortingtimes = [];
  for(let i = 0; i < 50; i++) {
    let sortme = Array.from({length: 10000}, () => Math.floor(Math.random() * 40));
    let time = performance.now()
    algorithms[key].sort(sortme);
    time -= performance.now()
    sortingtimes.push(time);
  }
  for(let elements of sortingtimes) {
    average += 
  }
}
