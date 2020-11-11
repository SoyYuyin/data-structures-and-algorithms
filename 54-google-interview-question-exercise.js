// GIVEN A NUMBER AND AN ARRAY OF NUMBERS, CREATE A FUNCTION THAT CHECKS
// IF THE ARRAY CONTAINS AT LEAST 2 NUMBERS THAT ADD UP FOR THE SUM GIVEN.

array = [1, 2, 3, 5]
console.log(array.legnth)
sum = 8

// function hasPairWithSum(arr, sum) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === sum) {
//         return true
//       }
//     }
//   }
//   return false
// }

// console.log(hasPairWithSum(array, sum))

// Lets try better solution using array for registering complements

function hasPairWithSum2(arr, sum) {
  complements = []
  for (let i = 0; i < arr.length; i++) {
    if (!complements.includes(sum - arr[i])) {
      complements.push(arr[i])
    } else {
      return `True: array contais ${arr[i]} and ${
        sum - arr[i]
      }, which add up to ${sum}!`
    }
  }
  return false
}

console.log(hasPairWithSum2(array, sum))
