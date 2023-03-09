function getAbsSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += Math.abs(arr[i])
  }
  return Math.abs(sum)
}
console.log(getAbsSum([2 + 2 + -1 + 4 + 7]))
