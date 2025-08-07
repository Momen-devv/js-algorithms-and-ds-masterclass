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

// console.log(sumZero1([-3, -2, -1, 0, 1, 2, 3]))
// console.log(sumZero1([-4, -3, -2, -1, 0, 7, 6, 5, 10]))

// Multiple Pointers: Count Unique Values Challenge
// First come in my mind
function countUniqueValues(array) {
  // make object
  let object = {}
  let result = []
  // loop in array and push it to array if exict add one if not = 1
  for (let num in array) {
    object[array[num]] ? (object[array[num]] += 1) : (object[array[num]] = 1)
  }
  console.log(object)
  // loop in object and check values if = 1 then add it to the arrry

  Object.entries(object).forEach(([key, value]) => {
    if (value === 1) {
      result.push(key)
    }
  })
  // return the array with finle unique numbers
  return result
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2, 7, 4, 4]))

// Multiple Pointers: Count Unique Values Challenge
function countUniqueValues2(array) {
  if (array.length === 0) return 0
  let one = 0
  let two = 1

  while (two < array.length) {
    if (array[one] === array[two]) two++
    if (array[one] !== array[two]) {
      one++
      array[one] = array[two]
    }
  }
  return array.slice(0, one).length
}

// console.log(countUniqueValues2([1, 1, 1, 1, 1, 1, 2, 7, 4, 4])) // 4
// console.log(countUniqueValues2([1, 1, 1, 1, 1, 2])) // 2
// console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
// console.log(countUniqueValues2([])) // 0
// console.log(countUniqueValues2([-2, -1, -1, 0, -1])) // 4

// Multiple Pointers: Count Unique Values Challenge with Colt Steele
function countUniqueValues3(arr) {
  if (arr.length === 0) return 0
  var i = 0
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

console.log(countUniqueValues3([1, 2, 2, 5, 7, 7, 99])) // 5
console.log(countUniqueValues3([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues3([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues3([])) // 0
console.log(countUniqueValues3([-2, -1, -1, 0, -1])) // 4
