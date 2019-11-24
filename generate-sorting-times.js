const timeFunction = require('time-function');
const algorithms = require('require-all')(__dirname + '/algorithms');

const iterations = 10

function randArr(arrLength, posRange){
  return Array.from({length: arrLength}, () => Math.floor(Math.random() * posRange));
}

const posRange = 200
const length = 10000
const times = []
for(algorithm in algorithms) {
  const ti = []
  for(let i = 0; i < iterations; i++){
    console.log(algorithm)
    let time = Math.round(1 * timeFunction(algorithms[algorithm], randArr(length, posRange)));
    ti.push(time);
  }
  times.push(ti.reduce((a,b)=>a + b) / ti.length)
}

for(time in times) {
  console.log(times[time])
}
