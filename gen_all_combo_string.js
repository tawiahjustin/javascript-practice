function comboString(str) {
  let combo = []
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      combo.push(str.slice(i, j))
    }
  }
  return combo
}

console.log(comboString('bob'))
