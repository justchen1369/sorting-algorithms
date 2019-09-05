"use strict";
let algorithms = require('require-all')(__dirname + '/algorithms')
const {performance} = require('perf_hooks');
let _cliProgress = require('cli-progress');
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
  //create a progress bar and increment every test, which is the inner for loop
  const progress_bar = new _cliProgress.SingleBar({}, _cliProgress.Presets.shades_classic);
  progress_bar.start(1000, 0)
  for(let i = 0; i < 1000; i++) {
    let sortme = Array.from({length: 1000}, () => Math.floor(Math.random() * 40));
    let time = performance.now()
    algorithms[key](sortme);
    time = performance.now() - time
    sortingtimes.push(time);
    progress_bar.increment()
  }
  console.log() //make a new line for the average declaration
  let average = sortingtimes.reduce((a, b) => {
     return a + b; })/sortingtimes.length
  average = Math.floor(average);
  console.log(`${key} on average took ${average} milliseconds!`)
}
const wtf = require('wtfnode');
wtf.dump();