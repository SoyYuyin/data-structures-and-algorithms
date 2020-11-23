numbers = [1, 4, 5, 2, 5, 8, 3]
//         0, 1, 2, 3, 4, 5, 6

function insertion_sort(array) {
  for (let i = 1; i < array.length; i++) {
    x = array[i]
    j = i - 1
    while ((array[j] > x) & (j >= 0)) {
      array[j + 1] = array[j]
      j = j - 1
    }
    array[j + 1] = x
  }
  return array
}

console.log(insertion_sort(numbers))
