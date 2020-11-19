// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  //code here;
  if (n === 0) {
    return 0
  }

  if (n === 1) {
    return 1
  }

  const series = [0, 1]
  for (let i = 2; i < n + 1; i++) {
    series.push(series[i - 1] + series[i - 2])
  }
  return series[n]
}

console.log(fibonacciIterative(6))

function fibonacciRecursive(n) {
  //code here;
  if (n < 2) {
    return n
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciRecursive(6))
