const algorithms = require('require-all')(__dirname + '/algorithms/');
const timeFunction = require('time-function');
const fs = require('fs');
const posRange = 200;

const arrLength = new Array(15)

for(let i = 0; i < arrLength.length; i++) {
	arrLength[i] = i * 1000
}
function randArr(arrLength, posRange) {
  return Array.from({ length: arrLength }, () =>
    Math.floor(Math.random() * posRange)
  );
}

const times = {};
for (algorithm in algorithms) {
	times[algorithm] = []
	console.log(algorithm)
	for (length of arrLength) {
		let unsorted = randArr(length, posRange);
		let time = timeFunction(algorithms[algorithm], unsorted);

		times[algorithm].push(time);
  }
}
fs.writeFileSync('data.json', JSON.stringify(times));