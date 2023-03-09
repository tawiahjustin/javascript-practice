function getBudgets(array) {
  const sum = array.reduce((acc, curr) => {
    return acc + curr.budget
  }, 0)
  return sum
}

console.log(
  getBudgets([
    { name: 'John', age: 21, budget: 23000 },
    { name: 'Steve', age: 10, budget: 3000 },
    { name: 'Martin', age: 5, budget: 2000 },
  ])
)
