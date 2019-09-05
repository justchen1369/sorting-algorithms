"use strict";
let algorithms = require('require-all')(__dirname + '/algorithms')
const {performance} = require('perf_hooks');

for(let keys in algorithms) {
  let array = [9,8,7,6,5,4,3,2,1]
  if(algorithms[keys](array) === array.sort()){
    console.log('Sorting sucessful with ' + keys)
  } else {
    console.log(`ERROR! ALGORITHM ${keys} RETURNED ${algorithms[keys](array)}!`)
  }
}
for(let key in algorithms) {
  let sortingtimes = [];
  for(let i = 0; i < 1000; i++) {
    let sortme = Array.from({length: 1000}, () => Math.floor(Math.random() * 40));
    let time = performance.now()
    algorithms[key](sortme);
    time = performance.now() - time
    sortingtimes.push(time);
  }
  let average = sortingtimes.reduce((a, b) => {
     return a + b; })/sortingtimes.length
  average = Math.floor(average);
  console.log(`${key} on average took ${average} milliseconds!`)
}