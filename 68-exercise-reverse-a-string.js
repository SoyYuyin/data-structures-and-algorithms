// Create a function that reverses a string
// 'hello'  should return:
// 'olleh'

function reverseString(text) {
  let reversed = []
  for (let i = 0; i < text.length; i++) {
    reversed[text.length - i] = text[i]
  }
  return reversed.join('')
}

console.log(reverseString('hello world'))
