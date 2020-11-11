// https://leetcode.com/problems/two-sum/description/

// //Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

nums = [2, 7, 11, 15]
target = 17

function addToTarget(nums, target) {
  const complements = []
  for (let i = 0; i < nums.length; i++) {
    if (complements.includes(nums[i])) {
      const index1 = nums.indexOf(target - nums[i])
      const index2 = i

      return [index1, index2]
    } else {
      complements.push(target - nums[i])
    }
  }
  return 'no pair of numbers in array add up to ' + target
}

console.log(addToTarget(nums, target))
