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

// GREATEST NUM OF CANDIES (LEETCODE)
var kidsWithCandies = function(candies, extraCandies) {
    const resultsArr = []
    let greatestNumOfCandies = 0
    
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > greatestNumOfCandies) greatestNumOfCandies = candies[i]
    }
    
    for (let j = 0; j < candies.length; j++) {
        resultsArr.push(candies[j] + extraCandies >= greatestNumOfCandies)
    }
    return resultsArr
};

// MAX CUSTOMER WEALTH (LEETCODE)

var maximumWealth = function(accounts) {
    let greatestCustomerWealth = 0
    
    for (let i = 0; i < accounts.length; i++) {
        let sumOfCustomerAccount = accounts[i].reduce((a, b) => a + b)
        if (sumOfCustomerAccount > greatestCustomerWealth) {
            greatestCustomerWealth = sumOfCustomerAccount
        }
    }
    
    return greatestCustomerWealth
}

// NUM OF GOOD PAIRS (LEETCODE)

var numIdenticalPairs = function(nums) {
    let numOfGoodPairs = 0
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) {
                numOfGoodPairs++
            }
        }
    }
    
    return numOfGoodPairs
};

// NUM OF JEWELS AND STONES (LEETCODE)

var numJewelsInStones = function(jewels, stones) {
    const jewelsHash = {}
    let jewelsAndStones = 0
    
    for (let i = 0; i < jewels.length; i++) {
        jewelsHash[jewels[i]] = 1
    }
    
    for (let j = 0; j < stones.length; j++) {
        if (jewelsHash[stones[j]]) jewelsAndStones++
    }
    
    return jewelsAndStones
}

// SMALLER NUMBERS THAN CURRENT (LEETCODE)

var smallerNumbersThanCurrent = function(nums) {
    const resultsArr = []
    
    for (let i = 0; i < nums.length; i++) {
        let numsSmallerThanOtherNum = 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j] && nums[i] !== nums[j]) {
                numsSmallerThanOtherNum++
            }
        }
        resultsArr.push(numsSmallerThanOtherNum)
    }
    
    return resultsArr
}

// NUM OF STEPS TO REDUCE A NUMBER TO ZERO (LEETCODE)

var numberOfSteps = function(num) {
    let count = 0
    return numberOfStepsHelper(num, count)
};

var numberOfStepsHelper = function(num, count) {
    while (num !== 0) {
        if (num % 2 === 0) {
            num = num / 2
            count++
            return numberOfStepsHelper(num, count)
        } else {
            num = (num - 1)
            count++
            return numberOfStepsHelper(num, count)
        }
    }
    return count
}

// SHUFFLE STRING (LEETCODE)

var restoreString = function(s, indices) {
    let resultsStrArr = []
    
    for (let i = 0; i < s.length; i++) {
        resultsStrArr[indices[i]]=s[i]
    }
    
    return resultsStrArr.join("")
};

// DECOMPRESS RUN LENGTH ENCODING 

var decompressRLEList = function(nums) {
    const resultsArr = []
    
    for (let i = 0; i < nums.length; i++) {
        let [freq, value] = [nums[i], nums[i + 1]]
        resultsArr.push(...Array(freq).fill(value));
        i++
    }
    
    return resultsArr
};

// COUNT CONSISTENT STRINGS (LEETCODE)

var countConsistentStrings = function(allowed, words) {
    let numOfConsistentStrings = 0
   
    for (const word of words) {
        let isAllowed = true
        for (const letter of word) {
            if (!allowed.includes(letter)) isAllowed = false
        }
        if (isAllowed) numOfConsistentStrings++
    }
    return numOfConsistentStrings
};

// GOAL PARSER INTERPRETATION (LEETCODE)

var interpret = function(command) {
    let resultArr = []
    
    for (let i = 0; i < command.length; i++) {
        if (command[i] === "G") {
            resultArr.push(command[i])
        } else if (command[i]  === "(" && command[i + 1] === ")") {
            resultArr.push("o")
        } else if (command[i] === "(" && command[i + 1] === "a" && command[i + 2] === "l" && command[i + 3] === ")") {
            resultArr.push("al")
        }
    }
    
    return resultArr.join("")
};

// NUM OF ITEMS MATCHING RULE (LEETCODE)

var countMatches = function(items, ruleKey, ruleValue) {
    let numOfItemsMatchingRule = 0
    
    for (let i = 0; i < items.length; i++) {
        if (ruleKey === "type" && ruleValue === items[i][0]) {
            numOfItemsMatchingRule++
        } else if (ruleKey === "color" && ruleValue === items[i][1]) {
            numOfItemsMatchingRule++
        } else if (ruleKey === "name" && ruleValue === items[i][2]) {
            numOfItemsMatchingRule++
        }
    }
    
    return numOfItemsMatchingRule
};

// CREATE TARGET ARRAY (LEETCODE)

var createTargetArray = function(nums, index) {
    const resultArr = []
    for (let i = 0; i < nums.length; i++) {
        resultArr.splice(index[i], 0, nums[i]);
    }
    
    return resultArr
};

// TWO STRING ARRAYS (LEETCODE)

var arrayStringsAreEqual = function(word1, word2) {
    let joined1 = word1.join("")
    let joined2 = word2.join('')
    
    return joined1 === joined2
};

// NUM OF EVEN NUMS (LEETCODE)

var findNumbers = function(nums) {
    let numOfEvenNums = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) {
            numOfEvenNums++
        }
    }
    return numOfEvenNums
};

// NUMBER OF MAX LENGTH RECTANGLES (LEETCODE)

var countGoodRectangles = function(rectangles) {
    let maxLen = 0
    let numOfMaxLenRectangles = 0
    
    for (let i = 0; i < rectangles.length; i++) {
        if (maxLen < Math.min(...rectangles[i])) {
            maxLen = Math.min(...rectangles[i])
        }
        rectangles[i][0] = Math.min(...rectangles[i])
        rectangles[i][1] = Math.min(...rectangles[i])
    }
   console.log(rectangles)
    for (let j = 0; j < rectangles.length; j++) {
        if (rectangles[j][0] === maxLen || rectangles[j][1] === maxLen) {
            numOfMaxLenRectangles++
        }
    }
    
    return numOfMaxLenRectangles
};

// MAXIMUM 69 NUMBER (LEETCODE)

var maximum69Number  = function(num) {
    const splitNum = num.toString().split("")
    
        for (let i = 0; i < splitNum.length; i++) {
            if (splitNum[i] === "6") {
                splitNum[i] = "9"
                break
            }
        }
    return parseInt(splitNum.join(""))
};

// MERGE ALTERNATING CHARACTERS (LEETCODE)

var mergeAlternately = function(word1, word2) {
    const resultArr = []
    const maxLength = Math.max(word1.length, word2.length)
    
    for (let i = 0; i < maxLength; i++) {
            resultArr.push(word1[i], word2[i])
    }
    
    return resultArr.join("")
};

// NUM OF STUDENTS DOING HW AT A CERTAIN TIME (LEETCODE)

var busyStudent = function(startTime, endTime, queryTime) {
    let numOfStudentsDoingHWAtQueryTime = 0
    
    for (let i = 0; i < startTime.length; i++) {
        if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
            numOfStudentsDoingHWAtQueryTime++
        }
    }
    
    return numOfStudentsDoingHWAtQueryTime
};

// COUNT NUMBER OF NEGATIVES IN A GRID (LEETCODE)

var countNegatives = function(grid) {
    let numOfNegatives = 0
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] < 0) {
                numOfNegatives++
            }
        }
    }
    
    return numOfNegatives
};

// SUM OF UNIQUES (LEETCODE)

var sumOfUnique = function(nums) {
    const numsHash = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (!numsHash[nums[i]]) numsHash[nums[i]] = 0
        
        numsHash[nums[i]]++
    }
    
    const keysArray = Object.keys(numsHash).filter(key => numsHash[key] === 1)
    let sum = 0
    
    for (let j = 0; j < keysArray.length; j++) {
        sum += parseInt(keysArray[j])
    }
    return sum
};

// N REPEATED ELEMENT IN ARRAY (LEETCODE)

var repeatedNTimes = function(A) {
    A.sort((a, b) => a - b)
    
    for (let i = 1; i < A.length; i++) {
        if (A[i] === A[i - 1]) return A[i]    
    }
    
};

// REPLACE NUM IN ARRAY WITH GREATEST NUM ON RIGHT SIDE (LEETCODE)

var replaceElements = function(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        let maxValue = 0
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > maxValue) maxValue = arr[j]
        }
        arr[i] = maxValue
    }
    arr[arr.length - 1] = -1 
    return arr
};

// JUDGE IF ROBOT MOVES IN COMPLETE CIRCLE BACK TO BEGINNING POINT (LEETCODE)

var judgeCircle = function(moves) {
    let x = 0
    let y = 0
    
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "R") {
            x++
        } else if (moves[i] === "L") {
            x--
        } else if (moves[i] === "U") {
            y++
        } else if (moves[i] === "D") {
            y--
        }
    }
   return x === 0 && y === 0
};

// REVERSE WORDS (LEETCODE)

var reverseWords = function(s) {
    const splitStr = s.split(" ")
    const resultArr = []
    
    function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
    
   for (let i = 0; i < splitStr.length; i++) {
       resultArr.push(reverseString(splitStr[i]))
   }
    
    return resultArr.join(" ")
};

// HEIGHT CHECKER (LEETCODE)

var heightChecker = function(heights) {
    let numOfIndicesWhereHeightIsNotExpected = 0
    const expected = [...heights]
    expected.sort((a, b) => a - b)
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            numOfIndicesWhereHeightIsNotExpected++
        } 
    }
    
    return numOfIndicesWhereHeightIsNotExpected
};

// TRAP RAIN WATER (LEETCODE)

function measureWaterHeight (array) {
    let amountOfWaterThatCanBeStored = 0
    let leftMaxHeight = 0
    let rightMaxHeight = 0
    let leftPointer = 0
    let rightPointer = array.length - 1
  
    while (leftPointer < rightPointer) {
        leftMaxHeight = Math.max(leftMaxHeight, array[leftPointer])
        rightMaxHeight = Math.max(rightMaxHeight, array[rightPointer])
        if (array[leftPointer] < array[rightPointer]) {
            amountOfWaterThatCanBeStored += leftMaxHeight - array[leftPointer++]
        } else {
            amountOfWaterThatCanBeStored += rightMaxHeight - array[rightPointer--]
        }
    }
    
    return amountOfWaterThatCanBeStored;
  };

//   MAX STOCK PROFIT (LEETCODE)

  var maxProfit = function(prices) {
    let maxprofit = 0;
    let minprice = Infinity;
    
    for (let day = 0; day < prices.length; day++) {
        minprice = Math.min(minprice, prices[day]);
        maxprofit = Math.max(maxprofit, prices[day] - minprice);
    }
    return maxprofit;
}