function afterNYears(names, n) {
  n = Math.abs(n)
  for (let key in names) {
    names[key] += n
  }
  return names
}
// or
function afterNYears(names, n) {
  if (n < 0) {
    n = -n
  }
  for (let person in names) {
    names[person] += n
  }
  return names
}
console.log(afterNYears({ Joel: 32, Fred: 4, Reginald: 32, Julian: 32 }, 2))
//finished
