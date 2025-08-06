// Try without multiple pointers pattern
// [-3 ,-2 ,-1 ,0 ,1 ,2 ,3]

function sumZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === 0) return [array[i], array[j]]
    }
  }
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))

// Multiple Pointers Pattern
function sumZero1(array) {
  let left = 0
  let right = array.length - 1
  while (left < right) {
    let sum = array[left] + array[right]
    if (sum === 0) return [array[left], array[right]]

    if (sum > 0) {
      right--
    } else {
      left++
    }
  }
  return undefined
}

console.log(sumZero1([-3, -2, -1, 0, 1, 2, 3]))
console.log(sumZero1([-4, -3, -2, -1, 0, 7, 6, 5, 10]))
