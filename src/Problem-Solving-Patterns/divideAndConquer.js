// Divide And Conquer Pattern
function DivideAndConquer(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1 // Target not found
}

// Example Usage
const sortedArray = [1, 3, 5, 7, 9, 11]
const target = 5
const result = DivideAndConquer(sortedArray, target)
console.log(result) // Output: 2
