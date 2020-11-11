// Given an array of items, return the first recurring character.

const array = [1, 2, 4, 4, 2, 5, 6] // should return 4

function recurringCharacter(array) {
  let map = {}
  for (i = 0; i < array.length; i++) {
    if (!map[array[i]]) {
      map[array[i]] = true
    } else {
      return array[i]
    }
  }
  return undefined
}

console.log(recurringCharacter(array))

// Doing a nested for loop would not work.
// in case we have [2,5,5,2,3], this would return 2 instead of 4
// because it would have to compare every item in order with every other item in the array
