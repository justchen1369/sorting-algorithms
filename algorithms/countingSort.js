module.exports = (arr)=>{
  let keys = {}
  for(let i = 0; i < arr.length; i++){
    let number = arr[i]
    keys[number] = keys[number] ? keys[number] + 1 : 1
  }
  let j = 0
  for (let key in keys) {
    for (let i = 0; i < keys[key]; i++) {
      arr[j] = key
      j++
    }
  }
  return arr
}