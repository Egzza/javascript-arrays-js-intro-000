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
