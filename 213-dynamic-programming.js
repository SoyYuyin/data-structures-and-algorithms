// memomized fibonacci function
let calculations = 0
function fibonacciMaster() {
  let cache = {}
  return function fibonacciR(n) {
    calculations++
    if (cache[n]) {
      return cache[n]
    } else if (n < 2) {
      return n
    } else {
      cache[n] = fibonacciR(n - 1) + fibonacciR(n - 2)
      return cache[n]
    }
  }
}

const fastFib = fibonacciMaster()

console.log('dynamic programming', fastFib(100))
console.log('did only ', calculations, 'calculations')
