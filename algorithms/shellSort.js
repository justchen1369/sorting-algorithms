module.exports = (arr)=>{
  let gaps = [701, 301, 132, 57, 23, 10, 4, 1]
  gaps.forEach((gap)=>{
    for(let i = gap; i < arr.length; i++){
      for (j = i; j >= gap && arr[j - gap] > arr[i]; j -= gap)
        {
            arr[i], arr[j] = arr[j], arr[j - gap]
        }
    }
  })
  return arr
}