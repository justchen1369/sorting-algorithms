let bubbleSort = require('./bubbleSort.js')

module.exports = function mergeSort(arr){
  if(arr.length <= 10) return bubbleSort(arr)
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right))
}
// Merge the two arrays: left ant
function merge(left, right) {
  let result = [], i = 0; j = 0
  while(i < left.length && j < right.length) {
    if (left[i] < right[j]){
      result.push(left[i]);
      i++
    } else {
      result.push(right[j])
      j++
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}
