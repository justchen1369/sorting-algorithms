module.exports = (arr)=>{
  for(i in arr){
    let key = arr[i] 
    let j = i - 1
    while(j > 0 && key < arr[j]){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = key
  }
  return arr
}