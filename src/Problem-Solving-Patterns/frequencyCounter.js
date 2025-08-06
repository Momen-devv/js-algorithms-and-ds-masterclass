//[1 ,2 ,3], [4, 1, 9] true
//[1 ,2 ,3], [1, 9] false
//[1 ,2 ,1], [4 , 4, 1] false

// Try without frequency counter
function same1(arr1, arr2) {
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

// console.log(same1([1, 2, 1], [4, 4, 1]))

// Frequency counter
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  //   console.log(frequencyCounter1)
  //   console.log(frequencyCounter2)
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

// same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])

// Solve Frequency Counter: Anagram Challenge
// ('', '') true
// ('aaz', 'zza') false
// ('anagram', 'nagaram') true
// ('rat', 'car') false
// ('awesome', 'awesom') false
// ('qwerty', 'qeywrt') true
// ('texttwisttime', 'timetwisttext') true

function validAnagram(word1, word2) {
  if (word1 === '' && word2 === '') {
    return true
  }

  let wordCounter1 = {}
  let wordCounter2 = {}

  for (let char of word1) {
    wordCounter1[char] ? (wordCounter1[char] += 1) : (wordCounter1[char] = 1)
    wordCounter1[char] = (wordCounter1[char] || 0) + 1
  }

  for (let char of word2) {
    wordCounter2[char] = (wordCounter2[char] || 0) + 1
  }

  for (let key in wordCounter1) {
    if (!(key in wordCounter2)) {
      return false
    }

    if (wordCounter1[key] !== wordCounter2[key]) return false
  }

  return true
}

console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('rat', 'car'))
console.log(validAnagram('awesome', 'awesom'))
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'))
console.log(validAnagram('qwerty', 'qeywrt'))
console.log(validAnagram('texttwisttime', 'timetwisttext'))
