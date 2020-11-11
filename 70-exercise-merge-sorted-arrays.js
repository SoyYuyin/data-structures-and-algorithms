// Given 2 sorted arrays of numbers
// return 1 merged array from the numbers of both arrays still sorted

function mergeSortedArrays(arr1, arr2) {
  let i = 0
  let j = 0
  const mergedArr = []

  if (arr1.length === 0) {
    return arr2
  }

  if (arr2.length === 0) {
    return arr1
  }

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i])
      i++
    } else {
      mergedArr.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    mergedArr.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j])
    j++
  }

  return mergedArr
}

console.log(
  mergeSortedArrays([1, 2, 6, 90, 91, 93], [2, 3, 4, 10, 23, 80, 999])
)
