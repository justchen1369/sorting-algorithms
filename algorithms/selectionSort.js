module.exports = (arr) => {
  for (let i = 0; i < arr.length; i++) { //main outer loop
    let smallest = i //later swapped if any smaller elements
    for (let j = i+1; j < arr.length; j++) { //start from 1, not 0 for comparison
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
      if (j_min !== i) {
        let temp = arr[i];
        arr[i] = arr[j_min];
        arr[j_min] = temp;
      }
    }
  }
  return arr
}
/*
this function has a outer loop that loops through each element in the array, then loops through each element in the array after the array indexed by the outer loop. for each element in the inner loop, it calculates the minimum and later swaps it with the indexed outer loop element.
*/
