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
