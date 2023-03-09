function inkLevels(inks) {
  let arr = Object.keys(inks).map(function (key) {
    return inks[key]
  })
  let min = Math.min.apply(null, arr)
  return min
}

console.log(
  inkLevels({
    cyan: 23,
    magenta: 12,
    yellow: 0,
  })
)
