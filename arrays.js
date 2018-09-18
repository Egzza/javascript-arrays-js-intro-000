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
  return arr.unshift(data)
}
