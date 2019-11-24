"use strict";
const algorithms = require('require-all')(__dirname + '/algorithms')
const {performance} = require('perf_hooks');
const _cliProgress = require('cli-progress');
const _colors = require('colors');
const fs = require('fs');
const timeFunction = require('time-function')

//define vars for tests
let iterations = 1000
let arrLength = 1000
let posRange = 100

//initialize stuff
let totalSortingTimes = {}

function randArr(arrLength, posRange){
  return Array.from({length: arrLength}, () => Math.floor(Math.random() * posRange));
}

function intArrEqual(val1, val2){
  if(val1.length !== val2.length) return false
  if(typeof val1 === 'array' || typeof val2 === 'array'){
    return false
  }

  for(let i = 0; i < val1.length; i++){
    if(val1[i] !== val2[i]){
      return false
    }
  }
  return true
}

//oh whatever, fix unflexbility later
function bar(){
    return new _cliProgress.Bar({
        format: '{algorithm}' + '|' + _colors.cyan('{bar}') + '| iteration {value}/{total}',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: true
    });
}

for(let algorithm in algorithms){
  totalSortingTimes[algorithm] = []
  let progress = bar();
  progress.start(iterations, 0, {"algorithm" : algorithm.padEnd(20).slice(0, 20)})
  for(let i = 0; i < iterations; i++){

    let time = timeFunction(
      algorithms[algorithm],
      randArr(arrLength, posRange)
    )
    
    totalSortingTimes[algorithm].push(time)

    progress.increment()
  }
  progress.stop()
}
fs.writeFileSync('./data.txt', JSON.stringify(totalSortingTimes, null, 2))