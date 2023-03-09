function filterArray(arr) {
  return arr.filter((x) => typeof x === 'number')
}
console.log(filterArray([1, 7, , 'a', 'b', 5, 5]))
