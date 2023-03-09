function isPallindrome(word) {
  let letters = []
  let rword = ''
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i])
  }

  for (let i = 0; i < word.length; i++) {
    rword = rword + letters.pop()
  }
  if (rword === word) {
    console.log(word + ' is a pallindrome.')
  } else {
    console.log(word + ' is not a pallindrome.')
  }
}
isPallindrome('racecar')
