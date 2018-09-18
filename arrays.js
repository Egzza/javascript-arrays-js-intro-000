var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(arr, data) {
  return [data, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, data){
  arr.unshift(data)
  return arr
}

function addElementToEndOfArray(arr, data){
  return [...arr, data]
}

function destructivelyAddElementToEndOfArray(arr, data){
  arr.push(data)
  return arr
}

function accessElementInArray(arr, i){
  return arr[i]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr){
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr){
  console.console.log(arr.slice(arr.size-1));
  return arr.slice(arr.size-1)
}
