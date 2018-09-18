var chocolateBars = [
  "snickers", 
  "hundred grand",
  "kitkat",
  "skittles"
]

addElementToBeginningOfArray(arr, data){
  return [...arr, data]
}

destructivelyAddElementToBeginningOfArray(arr, data){
  arr.unshift(data)
  return arr
}

addElementToEndOfArray(arr, data){
  var arr2 = arr
  arr2.push(data)
  return arr2
}

destructivelyAddElementToEndOfArray(arr, data){
  arr.push(data)
  return arr
}

accessElementInArray(arr, i){
  return arr[i]
}

destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}

removeElementFromBeginningOfArray(arr){
  var arr2 = arr
  arr2.shift()
  return arr2
}

removeElementFromBeginningOfArray(arr){
  var arr2 = arr
  arr2.pop()
  return arr2
}

destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.pop()
  return arr
}
