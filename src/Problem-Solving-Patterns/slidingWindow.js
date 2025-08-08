// Sliding Window Pattern
function maxSubarraySum(array, num) {
  // array short than num
  if (num > array.length) {
    return null
  }
  // sum
  let sum = 0
  let sum1

  // loop in array start with i
  for (let i = 0; i < array.length; i++) {
    sum1 = array[i]
    for (let j = i + 1; j < num + i; j++) {
      sum1 += array[j]
    }
    // and compare the the old sum with the new
    // the bigger one will assimt to the sum
    if (sum1 > sum) sum = sum1
  }
  // return sum
  return sum
}

// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)) //19

// Sliding Window Pattern Naive
function maxSubarraySum1(arr, num) {
  if (num > arr.length) {
    return null
  }
  var max = -Infinity
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0
    for (let j = 0; j < num; j++) {
      temp += arr[i + j]
    }
    if (temp > max) {
      max = temp
    }
  }
  return max
}

console.log(maxSubarraySum1([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)) // 19
