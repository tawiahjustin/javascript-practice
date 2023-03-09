//
function reverse(number) {
  let result = 0

  while (number > 0) {
    rightmost = number % 10
    result = result * 10 + rightmost

    number = Math.floor(number / 10)
  }
  return result
}
console.log(reverse(34223))

//
function reverseNumber(num) {
  return (
    parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
  )
}
console.log(reverseNumber(34223))
