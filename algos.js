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