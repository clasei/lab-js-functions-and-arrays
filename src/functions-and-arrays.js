// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        // return `${num1} is greater than ${num2}`\
        return num1
    } else if (num2 > num1) {
        // return `${num2} is greater than ${num1}`
        return num2
    } else {
        // return `both numbers are equal`
        return num1
    }
}

console.log(maxOfTwoNumbers(7, 3))
console.log(maxOfTwoNumbers(23, 23))
console.log(maxOfTwoNumbers(54654654546547, 36546464859435243684))



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
const emptyArr = [] // empty array

function findLongestWord(wordsArr) {

    if (wordsArr.length === 0) {
        return null
    }

    let longestWord = ""

    for (let i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i].length > longestWord.length) {
            longestWord = wordsArr[i]
        }
    }

return longestWord

}

console.log(`the longest word is ${findLongestWord(words)}`)

// empty array returns null
console.log(`this is an empty array so... ${findLongestWord(emptyArr)}`)




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbArray) { // numb is for numbers xd
    let sum = 0

    for (let i = 0; i < numbArray.length; i++) {

        sum += numbArray[i] // this adds and sum every element of the array to they new variable sum
    }

    return sum

}

console.log(`the sum of the numbers in the array is ${sumNumbers(numbers)}`)




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
const numbers3 = []

function averageNumbers(numbAverage) {

    if (numbAverage.length === 0) {
        return 0
    }

    let average = sumNumbers(numbAverage) / numbAverage.length;

    return average

}

console.log(`the average of these numbers is ${averageNumbers(numbers2)}`)
console.log(`the average of these numbers is ${averageNumbers(numbers3)}`)




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(possibleWords, searchedWord) {

    if (possibleWords.length === 0) {
        return null
    }

    if (possibleWords.includes(searchedWord)) {
        return true
    }

    else {
        return false
    }
        
}

let searchedWord = "subset"


console.log(`${searchedWord} exists in the array: ${doesWordExist(words2, searchedWord)}`)
