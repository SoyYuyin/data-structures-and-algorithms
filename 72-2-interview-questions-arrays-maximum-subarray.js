// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

function maxSubarray(nums) {
  let aSolution = nums[0]
  let maxSofar = nums[0]
  for (let i = 1; i < nums.length; i++) {
    aSolution = Math.max(aSolution + nums[i], nums[i])
    maxSofar = Math.max(maxSofar, aSolution)
    return maxSofar
  }
  console.log(maxSubarray(numbers))

  // Explanation:
  // We iterate over the numbers and determine if the current number is bigger alone, or is the sum of the previous with this one bigger? if it's bigger alone, drop the prev series and start fresh then store it as one possible solution

  // Then  check if the solution is better than the previous? if so, overwritte if not, keep the best so far.
  //
}
