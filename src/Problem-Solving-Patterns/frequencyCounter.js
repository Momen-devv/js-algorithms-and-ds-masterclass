//[1 ,2 ,3], [4, 1, 9] true
//[1 ,2 ,3], [1, 9] false
//[1 ,2 ,1], [4 , 4, 1] false

// Try without frequency counter
function same(arr1, arr2) {
  if (arr1.length != arr2.length) return false

  // loop on the arry 1
  loop: for (let i = 0; i < arr1.length; i++) {
    // compare all element with array 2
    for (let j = 0; j < arr2.length; j++) {
      // if elemnt * element  in array 1 = elemnt in array 2
      if (arr1[i] * arr1[i] == arr2[j]) {
        // delete correct number in the array
        arr2.splice(j, 1)
        // continue to the next element in array 1
        continue loop
      }
    }
  }
  // check array 2 and return true or false
  return arr2.length === 0
}

console.log(same([1, 2, 1], [4, 4, 1]))
