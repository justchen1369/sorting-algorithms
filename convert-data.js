
const rainbow = require('color-rainbow');
const data = require(__dirname + '/data.json');
const fs = require('fs')

const colors = convertColors(Object.keys(data).length);
const stuff = {
  type: 'line',
  data: {
    labels: Object.keys(data),
    datasets: []
  },
  options: {}
}

function rgbFactory(input) {
  return `rgb(${input.r}, ${input.g}, ${input.b})`
}

function convertColors(n) {
  return rainbow.create(n)
  .map((values) => {
    return rgbFactory(values.rgb());
  });
}

let i = 0
for(element in data) {
  stuff.data.datasets.push(
    {
      borderColor: colors[i],
      label: element,
      data: data[element]
    }
  )
  i++
}
fs.writeFileSync('chart.json', JSON.stringify(stuff, 2));
console.log(stuff);