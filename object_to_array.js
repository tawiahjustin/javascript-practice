function objectToArray(obj) {
  let array = []
  for (let key in obj) {
    let value = obj[key]
    array.push([key, value])
  }
  return array
}
console.log(
  objectToArray({
    d: 1,
    b: 2,
    c: 3,
  })
)
