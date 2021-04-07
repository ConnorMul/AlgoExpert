// ALGOEXPERT QUESTIONS

// TWO NUM SUM

function twoNumberSum(array, targetSum) {
    // Write your code here.
  // 	instantiate results arr
      const resultsArr = []
  // 	loop through original arr twice to add values
      for (let i = 0; i < array.length; i++) {
          for (let j = i + 1; j < array.length; j++) {
  // 			check if both numbers add up to target sum
              if (array[i] + array[j] === targetSum) {
  // 				if they do add them to results array
                  resultsArr.push(array[i], array[j])
              }
          }
      }
  // 	return results arr
      return resultsArr
  }
  

//   VALIDATE SUBSEQUENCE

function isValidSubsequence(array, sequence) {
    // Write your code here.
  // declaring array index and sequence index variables 
      let arrayIndex = 0
      let seqIndex = 0
  // 	looping through while seeing if 
      while (arrayIndex < array.length && seqIndex < sequence.length) {
          if (array[arrayIndex] === sequence[seqIndex]) {
              seqIndex++
          }
          arrayIndex++
      }
      return seqIndex === sequence.length
  }

// SORTED SQUARED ARRAY

function sortedSquaredArray(array) {
    // Write your code here.
      const resultsArr = []
  // 		loop through the array
      for (let i = 0; i < array.length; i++) {
  // 		square numbers and push into results array
          const squaredNum = array[i] * array[i]
          resultsArr.push(squaredNum)
      }
      
    return resultsArr.sort((a, b) => a - b);
}

// TOURNAMENT WINNER

function tournamentWinner(competitions, results) {
    // Write your code here.
      console.log(competitions)
      console.log(results)
      
      const teamHash = {}
  // 	looping through array and adding team names to hash with starting score of 0
      for (let i = 0; i < competitions.length; i++) {
          teamHash[competitions[i][0]] = 0
          teamHash[competitions[i][1]] = 0
  // 		looping through results array to determine winner
          for (let j = 0; j < results.length; j++) {
              if (results[j] === 0) {
                  teamHash[competitions[i][0]] = teamHash[competitions[i][0]] + 3
              } else {
                  teamHash[competitions[i][1]] = teamHash[competitions[i][1]] + 3
              }
          }
      }
      
      Math.max(Object.keys(teamHash).reduce((a, b) => a > b))
  
}

// NON-CONSTRUCTIBLE CHANGE

function nonConstructibleChange(coins) {
    // Write your code here.
      const sortedCoins = coins.sort((a, b) => a - b)
      
      let maxCoinValue = 0
      for (let i = 0; i < sortedCoins.length; i++) {
          if (sortedCoins[i] > maxCoinValue + 1) return maxCoinValue + 1
          
          maxCoinValue += sortedCoins[i]
      }
      
    return maxCoinValue + 1;
}

// MINIMUM WAITING TIME

function minimumWaitingTime(queries) {
	queries.sort((a, b) => a - b)
	
	let waitingTime = 0
	
	for (let i = 0; i < queries.length; i++) {
		const queriesLeft = queries.length - (i + 1)
		waitingTime += queriesLeft * queries[i]
	}
	
  return waitingTime;
}

// CLASS PHOTOS

function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
  // 	store the front and back row in two arrays 
      let frontRow = []
      let backRow = []
  // 	sort the arrays to compare their end values
      const sortedReds = redShirtHeights.sort()
      const sortedBlues = blueShirtHeights.sort()
  // 	compare sorted arrays tallest student height and determine which is front / back row
      if (sortedReds[sortedReds.length - 1] > sortedBlues[sortedBlues.length - 1]) {
          frontRow = sortedBlues
          backRow = sortedReds
      } else {
          frontRow = sortedReds
          backRow = sortedBlues
      }
  // loop through backRow and determine if students in back row are taller
      for (let i = 0; i < backRow.length; i++) {
          return frontRow[i] < backRow[i]
      }
    return false;
}

// REMOVE DUPLICATES FROM LINKED LIST

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
      let currentNode = linkedList
      
      while(currentNode !== null) {
          let nextNode = currentNode.next
          while (nextNode !== null && nextNode.value === currentNode.value) {
              nextNode = nextNode.next
          }
          
          currentNode.next = nextNode
          currentNode = nextNode
      }
      return linkedList
}

//  GET NTH FIBONACCI

function getNthFib(n) {
    // Write your code here.
      if (n === 2) {
          return 1
      } else if (n === 1) {
          return 0
      } else {	
          return getNthFib(n - 1) + getNthFib(n - 2)
      }
}

// PALINDROME CHECK

function isPalindrome(string) {
    // Write your code here.
      const splitStr = string.split("").reverse()

      return splitStr.join("") === string
}

// BST

function findClosestValueInBst(tree, target) {
      let currentNode = tree
      let closestValue = currentNode.value

      while (currentNode !== null) {
          if (Math.abs(target - closestValue) > Math.abs(target - currentNode.value)) {
              closestValue = currentNode.value
          }
          if (target < currentNode.value) {
              currentNode = currentNode.left
          } else if (target > currentNode.value) {
              currentNode = currentNode.right
          } else {
              break
          }
      }
      return closestValue
}

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

// Bubble Sort

function bubbleSort(array) {
    // Write your code here.
      for (let i = 0; i < array.length; i++) {
          for (let j = i + 1; j < array.length; j++) {
              if (array[i] > array[j]) {
                  let holderPointer = array[i]
                  array[i] = array[j]
                  array[j] = holderPointer
              }
          }
      }
    return array
}

// Insertion Sort

function insertionSort(array) {
 
	for (let i = 1; i < array.length; i++) {
		let j = i
		while (j > 0 && array[j] < array[j - 1]) {
			swap(j, j - 1, array)
			j -= 1
		}
	}
	return array
}

function swap(i, j, array) {
	const temp = array[j]
	array[j] = array[i]
	array[i] = temp
}

// INSERTION SORT

function selectionSort(array) {
    let currentIdx = 0
      while (currentIdx < array.length - 1) {
          let smallestIdx = currentIdx
      
      for (let i = currentIdx + 1; i < array.length; i++) {
          if (array[smallestIdx] > array[i]) {
              smallestIdx = i
          }
      }
          swap(currentIdx, smallestIdx, array)
          currentIdx++
      }
      return array
}
  
function swap(i, j, array) {
    const temp = array[j]
    array[j] = array[i]
    array[i] = temp
}

// SELECTION SORT

function selectionSort(array) {
    let currentIdx = 0
      while (currentIdx < array.length - 1) {
          let smallestIdx = currentIdx
      
      for (let i = currentIdx + 1; i < array.length; i++) {
          if (array[smallestIdx] > array[i]) {
              smallestIdx = i
          }
      }
          swap(currentIdx, smallestIdx, array)
          currentIdx++
      }
      return array
}

function swap(i, j, array) {
	const temp = array[j]
	array[j] = array[i]
	array[i] = temp
}

// BRANCH SUMS

function calculateBranchSums(node, runningSum, sums) {
	if (node === null) return
	
	let newRunningSum = runningSum + node.value
	if (!node.left && !node.right) {
		sums.push(newRunningSum)
		return
	}
	calculateBranchSums(node.left, newRunningSum, sums)
	calculateBranchSums(node.right, newRunningSum, sums)
}

function branchSums(root) {
  sums = []
	calculateBranchSums(root, 0, sums)
	return sums
}

// NODE DEPTHS

function nodeDepths(root, depth = 0) {
    if (root === null) return 0
   return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}

// This is the class of the input binary tree.
class BinaryTree {
 constructor(value) {
   this.value = value;
   this.left = null;
   this.right = null;
 }
}

// DEPTH FIRST SEARCH

class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
          array.push(this.name)
          for (const child of this.children) {
              child.depthFirstSearch(array)
          }
          return array
    }
}

// PRODUCT SUM

function productSum(array, multiplier = 1) {
    let sum = 0
   for (const element of array) {
       if (Array.isArray(element)) {
           sum += productSum(element, multiplier + 1)
       } else {
           sum += element
       }
   }
   return sum * multiplier
}

//  FIND THREE LARGEST NUMS

function findThreeLargestNumbers(array) {
	let threeLargest = [null, null, null]
	for (const num of array) {
		updateThreeLargest(threeLargest, num)
	}
	return threeLargest
}

function updateThreeLargest(threeLargest, num) {
	if (threeLargest[2] === null || num > threeLargest[2]) {
		shiftAndUpdate(threeLargest, num, 2)
	} else if (threeLargest[1] === null || num > threeLargest[1]) {
		shiftAndUpdate(threeLargest, num, 1)
	} else if (threeLargest[0] === null || num > threeLargest[0]) {
		shiftAndUpdate(threeLargest, num, 0)
	}
}

function shiftAndUpdate(threeLargest, num, idx) {
	for (let i = 0; i <= idx; i++) {
		if (i === idx) {
			threeLargest[i] = num
		} else {
			threeLargest[i] = threeLargest[i + 1]
		}
	}
}

// BINARY SEARCH

function binarySearch(array, target) {
    return binarySearchHelper(array, target, 0, array.length - 1)
  }
  
  function binarySearchHelper(array, target, left, right) {
      if (left > right) return -1 
      
      const mid = Math.floor((left + right) / 2)
      if (target === array[mid]) {
          return mid
      } else if (target < array[mid]) {
          return binarySearchHelper(array, target, left, mid - 1)
      } else if (target > array[mid]) {
          return binarySearchHelper(array, target, mid + 1, right)
      }
      
  }

//   SORTED SQUARES 2

function sortedSquaredArray(array) {
    // Write your code here.
      const resultsArr = []
      let smallestIdx = 0
      let largestIdx = array.length - 1
      
      for (let i = array.length - 1; i >= 0; i--) {
          let smallestValue = array[smallestIdx]
          let largestValue = array[largestIdx]
          
          if (Math.abs(smallestValue) > Math.abs(largestValue)) {
              let squared = smallestValue * smallestValue
              resultsArr[i] = squared
              smallestIdx++
          } else {
              let squared = largestValue * largestValue
              resultsArr[i] = squared
              largestIdx--
          }
      }
      
      return resultsArr
}

// GENERATE DOCUMENT

function generateDocument(characters, document) {
    // Write your code here.
      const charHash = {}
      
      for (let i = 0; i < characters.length; i++) {
          let char = characters[i]
          if (!charHash[char]) charHash[char] = 0
          
          charHash[char]++
      }
      
      for (let j = 0; j < document.length; j++) {
          let docChar = document[j]
          
          if (!charHash[docChar] || charHash[docChar] === 0) return false
          
          charHash[docChar]--
      }
      
    return true;
  }
  

//   RUN LENGTH ENCODING

function runLengthEncoding(string) {
	let encodedArr = []
	let currentRunLength = 1
	
	for (let i = 1; i < string.length; i++) {
		let currentChar = string[i]
		let previousChar = string[i - 1]
		
		if (currentChar != previousChar || currentRunLength === 9) {
			encodedArr.push(currentRunLength.toString() + previousChar)
			currentRunLength = 0
		}
		currentRunLength++
	}
	
	encodedArr.push(currentRunLength.toString() + string[string.length - 1])
	
	return encodedArr.join('')
}

// CAESAR CYPHER ENCODER

function caesarCipherEncryptor(string, key) {
    // Write your code here.
      const newStrArr = []
      const newKey = key % 26
      for (const char of string) {
          const newLetterCode = char.charCodeAt() + key
          newStrArr.push(getNewLetter(char, newKey))
      }
      return newStrArr.join("")
}
  
function getNewLetter(letter, key) {
      const newLetterCode = letter.charCodeAt() + key
      return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122))
}