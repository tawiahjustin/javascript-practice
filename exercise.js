//return min/max values
function returnMinMax(arr) {
  let arr_max_min = []
  let min = arr[0]
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  arr_max_min.push(min)
  arr_max_min.push(max)
  return [min, max]
}
console.log(returnArray([2, 4, 6, 8, 52]))

// return even numbers
function returnPair(arr) {
  let arr_pair = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arr_pair.push(arr[i])
    }
  }
  return arr_pair
}
console.log(returnPair([2, 4, 2, 52, 6, 8, 3, 4]))
