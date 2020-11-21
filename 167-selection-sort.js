const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i
    let temp = array[i]
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    array[i] = array[min]
    array[min] = temp
  }
  return array
}

selectionSort(numbers)
console.log(numbers)

// note in second for loop j initializes as i+1 not 1.
