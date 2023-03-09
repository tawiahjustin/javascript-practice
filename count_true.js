function countTrue(arr) {
  let sum = 0
  for (answer in arr) {
    if (arr[answer] == true) {
      sum += 1
    }
  }

  return sum
}

console.log(countTrue([true, false, false, false, false]))
