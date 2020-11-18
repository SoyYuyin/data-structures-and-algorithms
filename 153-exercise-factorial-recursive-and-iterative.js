// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  return number === 0 ? 1 : number * findFactorialRecursive(number - 1)
}

function findFactorialIterative(number) {
  //code here
  let answer = 1
  for (let i = number; i > 0; i--) {
    answer = answer * i
  }
  return answer
}

function factorialWhile(number) {
  let answer = 1
  while (number > 0) {
    answer = answer * number
    number--
  }
  return answer
}

console.log(findFactorialRecursive(5))
console.log(findFactorialIterative(5))
console.log(factorialWhile(5))
