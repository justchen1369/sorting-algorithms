"use strict";
const algorithms = require('require-all')(__dirname + '/algorithms')
const {performance} = require('perf_hooks');
const timeFunction = require('time-function')

//define vars for tests
let iterations = 10
let arrLength = 1000
let posRange = 100

function randArr(arrLength, posRange){
  return Array.from({length: arrLength}, () => Math.floor(Math.random() * posRange));
}

console.log(
  timeFunction(algorithms.countingSort, randArr(20000000, 200))
)
