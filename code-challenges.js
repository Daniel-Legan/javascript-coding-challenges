/* 
Calculate the Mean and Mode

Create a statsFinder() function that takes in a list of numbers and returns a list containing the mean and mode, in that order. 
As a reminder, the mean is the average of the values and the mode is the most occurring value. 
If there are multiple modes, return the mode that occurs first. 
Make sure that you write your functions and find these answers from scratch – don’t use imported tools!
*/

function statsFinder(array) {
    // mean
    let sum = 0;
    for (let item of array) {
        sum += item
    }

    // mode
    const obj = {};
    // count amount of occurrence of each number
    array.forEach(number => {
        // for each number in array,
        // if it doesn't already exist as a key on the
        // object, create one and set its value to 1.
        if (!obj[number]) {
            obj[number] = 1;
        } else {
            // if it already exists as key on the object,
            // increment its corresponding value.
            obj[number] += 1;
        }
    });

    // return object key with highest value.
    let highestValue = 0;
    let highestValueKey = -Infinity;

    for (let key in obj) {
        const value = obj[key];
        if (value > highestValue) {
            highestValue = value;
            highestValueKey = key;
        }
    }
    // convert key back to number
    return [(sum / array.length), Number(highestValueKey)]
}

console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]));

// Even or Odd
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}

/* Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times. */

/* 
"I"     -> "IIIIII"
"Hello" -> "HelloHelloHelloHelloHello"
*/

function repeatStr(n, s) {
    return s.repeat(n);
}

/* 
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/List with the length of each word added to each element.

Note: String will have at least one element; words will always be separated by a space.
*/

function addLength(str) {
    let arr = [];
    let words = str.split(' ');
    for (let word of words) {
        arr.push(word + ' ' + word.length);
    }
    return arr;
}