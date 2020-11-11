// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:
// Input: [1,2,3,1]
// Output: true

// Example 2:
// Input: [1,2,3,4]
// Output: false

// Example 3:
// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

const input = [1, 2, 3, 3]

// the solution below has the following performance
// 10/28/2020 18:33	Accepted	92 ms	47.1 MB	javascript
function containsDuplicates(nums) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return true
    } else {
      map[nums[i]] = true
    }
  }
  return false
}

// the solution below has the following performance
// 10/28/2020 18:26	Accepted	100 ms	47 MB
// function containsDuplicates(array) {
//   const map = {}
//   for (let i = 0; i < array.length; i++) {
//     if (!map[array[i]]) {
//       map[array[i]] = true
//     } else {
//       console.log('inside else')
//       return true
//     }
//     console.log(map)
//   }
//   return false
// }

console.log(containsDuplicates(input))
