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

/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/

function sumCubes(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += Math.pow(i, 3);
    }
    return sum;
}

/*
Given an integral number, determine if it's a square number.
*/

function isSquare(n) {
    return Number.isInteger(Math.sqrt(n));
}

var isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0 ? true : false;
}

/*
Given a set of numbers, return the additive inverse of each.
Each positive becomes negatives, and the negatives become positives.
*/

function invert(array) {
    return array.map(el => -el);
}

/*
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
*/

var number = function (busStops) {
    let people = 0;
    for (let stop of busStops) {
        people += stop[0] - stop[1];
    }
    return people;
}

var number = function (busStops) {
    let result = 0;
    for (let i = 0; i < busStops.length; i++) {
        result += busStops[i][0]
        result -= busStops[i][1]
    }
    return result;
}

/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. 
If the two numbers are equal return a or b.
*/
function getSum(a, b) {
    const min = a < b ? a : b;
    const max = a < b ? b : a;
    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
*/

const quarterOf = (month) => {
    return Math.ceil(month / 3);
}

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/
function solution(number) {
    let arr = [];
    let found = [];

    // push all num between 0 and the number to arr
    for (let i = 0; i < number; i++) {
        arr.push(i);
    }

    // if number in arr is a multiple or 3 or 5 push it to found
    for (let i = 0; i < arr.length; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            found.push(i);
        }
    }

    // sum the total of the found array, 0 is the initial value = p
    const total = found.reduce((p, c) => p + c, 0);

    return total;
}

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

/* 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
*/
function disemvowel(str) {
    let result = '';
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            result += str[i]
        }
    }
    return result;
}

// from someone else
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}