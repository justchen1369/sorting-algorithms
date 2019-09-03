"use strict";
let algorithms = require('require-all')(__dirname + '/algorithms')

console.log(algorithms.cocktailShakerSort([4,3,3,2,1]))


function newFunction() {
    console.time('bubbleSort');
    algorithms.bubbleSort(Array.from({ length: 1000 }, () => Math.floor(Math.random() * 98432)));
    console.timeEnd('bubbleSort');
}
