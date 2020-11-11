// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// let = array = [1, 2, 3, 4, 5, 6, 7]
// let = k = 3

// this solution uses a new array
// function rotate(nums, k) {
//   let result = []
//   for (let i = nums.length - k; i < nums.length; i++) {
//     result.push(nums[i])
//   }
//   for (let j = 0; j < nums.length - k; j++) {
//     result.push(nums[j])
//   }
//   return result
// }

// console.log(rotate(array, k))

// This solution is solved in place

// array = [-1, -100, 3, 99]
// k = 2

// let nums = [1, 2, 3, 4, 5, 6, 7]
// let k = 3

//this solution did not work with inputs :
// nums = [1], k=0
// nums = [1,2], k=3
// function rotateInPlace(nums, k) {
//   if (k === 0 || nums.length === 1) {
//     return nums
//   } else {
//     nums.slice(nums.length - k)
//     nums.unshift(...nums.slice(nums.length - k))
//     nums.splice(-k)
//   }
// }

// console.log(rotateInPlace(nums, k))

// array = [-1, -100, 3, 99]
// k = 2

// solution performance:
// 10/28/2020 21:00	Accepted	108 ms	39.6 MB	javascript
let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 3

function rotateInPlace1atatime(nums, k) {
  while (k--) {
    nums.unshift(nums.pop())
  }
  return nums
}
console.log(rotateInPlace1atatime(array, k))
