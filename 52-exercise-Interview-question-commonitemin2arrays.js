const array1 = ['a', 'b', 'h']
const array2 = ['c', 'd', 'e']

// function haveCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       // console.log(arr1[i], arr2[j])
//       if (arr1[i] === arr2[j]) {
//         return true
//       }
//     }
//   }
//   return false
// }

// OTRA MANERA DE RESOLVERLO MÁS EFICIENTE ES USANDO UN HASH MAP
// CONVIRTIENDO EL PRIMER ARRAY EN UN OBJETO
// { 'a': true, 'b':true, 'c': true}
// Y LUEGO ITERANDO EN EL SEGUNDO ARRAY Y BUSCANDO SI EXISTE DADO
// VALOR DE ESTE EN EL OBJETO

// console.log(haveCommonItem(array1, array2))

let map = {} // NUESTRO HASH MAP COMIENZA VACIO

// ESTA SERIA UNA FORMA MÁS LEIBLE DE HACERLO USANDO EL METODO FOREACH
// array1.forEach((item) => {
//   if (!map[item]) {
//     map[item] = true
//   }
// })
// O PODEMOS HACERLO CON UN FOR LOOP NORMAL

function containCommonItem2(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (!map[i]) {
      map[arr1[i]] = true
    }
  }

  console.log(map)

  for (let i = 0; i < arr2.length; i++) {
    if (map[arr2[i]]) {
      return true
    }
  }
  return false
}

console.log(containCommonItem2(array1, array2))

// THIS WAY OF SOLVING IT HAS A BETTER TIME COMPLEXITY OF O(n) (BETTER THAN PREVIOUS SOLUTION O(n^2))
// HOWEVER IT ALSO HAS BIGGER SPACE COMPLEXITY O(a) vs O(1) FROM THE PREVIOUS SOLUTION
// BECAUSE WE ARE CREATING A NEW OBJECT (map) WITH ONE ARRAY

// THIS ONE WOULD BE THE MOST READABLE WAY TO WRITE IT
function containCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item))
}

console.log(containCommonItem3(array1, array2))
