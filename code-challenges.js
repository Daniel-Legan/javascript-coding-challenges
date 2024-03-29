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

// console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]));

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

/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str) {
    result = str.split('');
    result.shift();
    result.pop();
    return result.join('');
    // return str.slice(1, (str.length-1));
};

// working on another tailwinds, node.js in another project

/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-35)

Note: The function accepts an integer and returns an integer.

Happy Coding!
*/

function squareDigits(num) {
    return Number(num.toString().split('').map(x => x * x).join(''))
}

/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*/

function highAndLow(numbers) {
    let numbersArray = numbers.split(" ").map(Number);
    let min = Math.min(...numbersArray);
    let max = Math.max(...numbersArray);
    return `${max} ${min}`;
}

/*
Write a program that outputs the top n elements from a list.
*/

function largest(n, array) {
    // Find the n highest elements in a list
    return array.sort((a, b) => b - a).slice(0, n).reverse();
}

/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)
*/

function sumOfMinimums(arr) {
    let sum = 0;
    for (let x of arr) {
        const minValue = Math.min(...x);
        sum += minValue;
    }
    return sum;
}

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */

function solution(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === char.toUpperCase()) {
            result += " ";
        }

        result += char;
    }

    return result;
}

/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

// function findOdd(arr) {
//     let counts = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (counts[arr[i]]) {
//             counts[arr[i]]++;
//         } else {
//             counts[arr[i]] = 1;
//         }
//     }
//     for (let key in counts) {
//         if (counts[key] % 2 !== 0) {
//             return parseInt(key);
//         }
//     }
// }

function findOdd(arr) {
    let occurrences = {};
    for (let num of arr) {
        // This line counts the occurrences of each unique integer. If num is already a property in the occurrences object, it increments its value by 1. If num is not a property yet, it initializes its count to 1.
        occurrences[num] = (occurrences[num] || 0) + 1;
    }

    /*
    EXAMPLE:
    occurrences = 
    {
        1: 2,
        2: 1,
        5: 2
    }
    */

    // Sorting the occurrences object
    for (let key in occurrences) {
        // This line retrieves the value associated with the current key (property) being iterated.
        let value = occurrences[key];

        console.log(`key: ${key}, value: ${value}`);

        if (value % 2 !== 0) {
            // console.log('found', key);
            return Number(key);
        }
    }
}

function iterateObject(obj) {
    for (let property in obj) {
        let value = obj[property]; // Access the value using bracket notation and store its value in the value variable
        console.log(`${property}: ${value}`);
    }
}

// function iterateObject(obj) {
//     for (let property in obj) {
//         console.log(`${property}: ${obj[property]}`);
//     }
// }

// iterateObject(car = { 'apple': 1, 'banana': 2, 'orange': 3 });

// console.log(findOdd([1, 1, 2, 5, 5]));

/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(str) {
    // Convert the string to lowercase and split it into an array of characters
    const chars = str.toLowerCase().split('');
    // Count the frequency of each character using an object
    const frequency = {};
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        frequency[char] = (frequency[char] || 0) + 1;
    }
    // Count the number of characters that occur more than once
    let count = 0;
    for (const char in frequency) {
        if (frequency[char] > 1) {
            count++;
        }
    }
    return count;
}

/* 
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

function reverseSeq(n) {
    let result = [];
    for (let i = n; i >= 1; i--) {
        result.push(i);
    }
    return result;
}

/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5

Let's assume that all numbers in the input will be integer values.
*/

function sumDigits(num) {
    const absoluteNum = Math.abs(num);

    if (absoluteNum < 10) {
        return absoluteNum;
    }

    const lastDigit = absoluteNum % 10;
    const remainingNum = Math.floor(absoluteNum / 10);

    return lastDigit + sumDigits(remainingNum);
}

/*
Description:
Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Strings will consist of uppercase letters only
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples:
      * "ONE", "TWO"  -> "TWO"`
      * "ONE", "NEO"  -> "Tie!"

*/

function calculatePower(str) {
    let totalPower = 0;
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i) - 64;
        totalPower += charCode;
    }
    return totalPower;
}

function battle(x, y) {
    const resultX = calculatePower(x);
    const resultY = calculatePower(y);

    if (resultX > resultY) {
        return x;
    } else if (resultY > resultX) {
        return y;
    } else {
        return "Tie!";
    }
}

// console.log(battle("ONE", "TWO"));
// console.log(battle("ONE", "NEO"));

/*
Given two strings, the first being a random string and the second being the same as the first, but with three added characters somewhere in the string (three same characters),

Write a function that returns the added character

E.g
string1 = "hello"
string2 = "aaahello"

// => 'a'
The above is just an example; the characters could be anywhere in the string and string2 is actually shuffled.

Another example
string1 = "abcde"
string2 = "2db2a2ec"

// => '2'
Note that the added character could also exist in the original string

string1 = "aabbcc"
string2 = "aacccbbcc"

// => 'c'
You can assume that string2 will aways be larger than string1, and there will always be three added characters in string2.

Write the function addedChar() that takes two strings and return the added character as described above.
*/

function addedChar(str1, str2) {
    const sorted1 = str1.split('').sort();
    const sorted2 = str2.split('').sort();

    for (let i = 0; i < sorted1.length; i++) {
        if (sorted1[i] !== sorted2[i]) {
            return sorted2[i];
        }
    }

    return sorted2[sorted2.length - 1];
}

/*
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]
*/

function distinct(array) {
    const resultArray = [];

    for (let element of array) {
        if (resultArray.indexOf(element) === -1) {
            resultArray.push(element);
        }
    }
    return resultArray;
}

/*
    fizz buzz
    array of # input
    iterate each one
    if input is divisible by 3 and remainder is 0 print fizz
    if input is divisible by 5 and remainder is 0 print buzz
    and if by both print fizz buzz
    else print the number
*/

// function test(arr) {
//     for (let element of arr) {
//         if (element % 3 == 0 && element % 5 === 0) {
//             console.log('fizz buzz');
//         }
//         else if (element % 3 === 0) {
//             console.log('fizz');
//         }
//         else if (element % 5 === 0) {
//             console.log('buzz');
//         }
//         else {
//             console.log(element);
//         }
//     }
// }

// test([1, 2, 3, 4, 5, 6, 15]);

/*
    flat or flatten - given a nested array [1, [2,3]]
*/

function test2(arr) {
    arr.flat(Infinity);
}

// function test3(arr) {
//     let bank = [];
//     for (let element of arr) {
//         if (Array.isArray(element)) {
//             bank.push(...test3(element));
//         }
//         else {
//             bank.push(element);
//         }
//     }
//     return bank;
// }

// function test3(arr) {
//     let bank = [];
//     for (let element of arr) {
//         if (Array.isArray(element)) {
//             bank = bank.concat(test3(element));
//         }
//         else {
//             bank.push(element);
//         }
//     }
//     return bank;
// }

// console.log(test3([1, 2, [3, 4]]));

// node c+TAB (node code-challenges.js)

function sol(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

/*
The vowel substrings in the word codewarriors are o,e,a,io. 
The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring.
Vowels are any of aeiou.
*/

function solve(string) {
    let current = 0;
    let max = 0;

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let letter of string) {
        if (vowels.includes(letter)) {
            current++;
            if (current > max) {
                max = current;
            }
        } else {
            current = 0;
        }
    }

    return max;
}

// console.log(solve('codewarriors'));

/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

function likes(names) {
    if (names.length === 0) {
        return "no one likes this";
    } else if (names.length === 1) {
        return `${names[0]} likes this`;
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}

// console.log(likes(['John', 'Jim', 'Cole', 'Sam']));
// console.log(likes(['John', 'Jim', 'Cole']));
// console.log(likes(['John', 'Jim']));
// console.log(likes(['John']));
// console.log(likes([]));

/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(string) {
    const array = string.trim().split(' ');
    let newString = '';

    for (let element of array) {
        if (element.length >= 5) {
            newString += element.split('').reverse().join('') + ' ';
        } else {
            newString += element + ' ';
        }
    }

    return newString.trim();
}

// console.log(spinWords('Hey fellow warriors'));
// console.log(spinWords('Welcome'));

/*
Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

// function initializeNames(name) {
//     let array = name.split(' ');
//     let shortenedName = [];

//     if (array.length <= 2) {
//         return array.join(' ')
//     } else {
//         shortenedName.push(array[0]);
//         for (let i = 1; i < array.length - 1; i++) {
//             shortenedName.push(array[i][0] + '.');
//         }
//         shortenedName.push(array[array.length - 1]);
//         return shortenedName.join(' ');
//     }
// }

function initializeNames(name) {
    var arr = name.split(' ');
    for (var i = 1; i < arr.length - 1; i++)
        arr[i] = arr[i].charAt(0) + '.';
    return arr.join(' ');
}

// console.log(initializeNames('Daniel Rissinger Legan'));

/*
Write a function

titleToNumber(title) or title_to_number(title) or titleToNb title ...

(depending on the language)

that given a column title as it appears in an Excel sheet, returns its corresponding column number. All column titles will be uppercase.

Examples:

titleTonumber('A') === 1
titleTonumber('Z') === 26
titleTonumber('AA') === 27
*/

function titleToNumber(title) {
    let result = 0;

    for (let i = 0; i < title.length; i++) {
        const number = title.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        result = result * 26 + number;
    }

    return result;
}

// console.log(titleToNumber('AA'));

/*
I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.

Example: 

N = 5;

String = "This is an example string";

Return value:
Thisi
sanex
ample
strin
g

Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'
*/

function stringBreakers(n, string) {
    const newString = string.split(' ').join('');
    let returnString = '';

    for (let i = 0; i < newString.length; i += n) {
        if (i + n < newString.length) {
            returnString += newString.slice(i, i + n) + '\n';
        } else {
            returnString += newString.slice(i);
        }
    }

    return returnString;
}

// console.log(stringBreakers(3, "This is a test string"));

/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
    const result = [];

    for (let i = 0; i < a.length; i++) {
        let inB = false;

        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                inB = true;
            }
        }
        if (!inB) {
            result.push(a[i]);
        }
    }

    return result;
}

/*
A better way from Codewars submissions:

function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}
*/

// console.log(arrayDiff([1, 1, 2, 3, 1], [1, 2]));

/*
The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

The year can be evenly divided by 4;
If the year can be evenly divided by 100, it is NOT a leap year, unless;
The year is also evenly divisible by 400. Then it is a leap year.
*/

function toDayOfYear(arr) {
    const day = arr[0];
    const month = arr[1];
    const year = arr[2];

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let numberOfDays = day;

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth[1] = 29;
    }

    for (let i = 0; i < month - 1; i++) {
        numberOfDays += daysInMonth[i];
    }

    return numberOfDays;
}

// console.log(toDayOfYear([1, 2, 2000]));

/*
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!
*/

function solve(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];

        // Check if the element is not in the result array
        if (!result.includes(currentElement)) {
            // Add the element to the result array
            result.push(currentElement);
        } else {
            // If it's already in the result array, remove it
            const index = result.indexOf(currentElement);
            result.splice(index, 1);
            result.push(currentElement);
        }
    }

    return result;
}

// console.log(solve([3, 4, 4, 3, 6, 3]));

/*
If you're not familiar with the fantastic culinary delights of the British Isles you may not know about the bread sandwich.

The idea is very simple - if you have a slice of bread between two other slices of bread, then it's a bread sandwich. Additionally, if you have a bread sandwich between two other slices of bread, you get a bread sandwich sandwich, and so on.

In this kata, we will define the following terms like so:

Sandwich - Two slices of bread which may or may not have a filling
Bread Sandwich - Two slices of bread which contains one slice of bread in the middle as a filling
You will need to build two functions:

Given the number of slices of bread, return the phrase used to refer to the sandwich
 2 - 'sandwich'
 5 - 'bread sandwich sandwich'
The reverse function - given the name of the sandwich, return how many slices of bread there are in the sandwich
'bread sandwich' - 3
'sandwich sandwich' - 4
You should return None/null if there is no input / the input is invalid / there is no sandwich
Maximum 100 slices of bread
*/

function slicesToName(n) {
    let breadToAdd = n % 2 === 0 ? false : true;

    if (n > 1 && breadToAdd === false) {
        let count = n;
        let phrase = [];
        for (let i = 0; i < count / 2; i++) {
            phrase.push('sandwich');
        }
        return phrase.join(' ').trim();
    } else if (n > 1 && breadToAdd === true) {
        let count = n - 1;
        let phrase = ['bread'];
        for (let i = 0; i < count / 2; i++) {
            phrase.push('sandwich');
        }
        return phrase.join(' ').trim();
    } else {
        return null;
    }
}

function nameToSlices(name) {
    if (!name || typeof name !== 'string') {
        return null;
    }

    if (name === "bread") {
        return null;
    }

    const sandwichNames = name.split(' ');

    let slices = 1;
    for (i = 1; i < sandwichNames.length; i++) {
        if (sandwichNames[i] === 'bread') {
            return null
        }
        slices += 2;
    }
    return slices;
}

// console.log(slicesToName(3));
// console.log(nameToSlices('bread sandwich'));

/*
Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. 
Note that each word in the array counts as a 90° rotation in that direction.

Worked Example
["right", "right", "right", "right", "left", "right"] ➞ 1
# You spun right 4 times (90 * 4 = 360)
# You spun left once (360 - 90 = 270)
# But you spun right once more to make a full rotation (270 + 90 = 360)
Examples
["left", "right", "left", "right"] ➞ 0

["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

["left", "left", "left", "left"] ➞ 1
*/

function spinAround(turns) {
    let degrees = 0;
    for (let move of turns) {
        if (move === "right") {
            degrees += 90;
        } else {
            degrees -= 90;
        }
    }
    return Math.floor(Math.abs(degrees / 360));
}

// console.log(spinAround(["right", "left", "right", "right", "right", "right"]));
// console.log(spinAround(["right", "left", "right", "right", "right"]));

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    return false;
}

// console.log(isLeapYear(2000));

/*
Write a function that merges two sorted arrays into a single one. 
The arrays only contain integers. 
Also, the final outcome must be sorted and not have any duplicate.
*/

function mergeArrays(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    const sortedArray = mergedArray.sort((a, b) => a - b);

    // Remove duplicates using Set
    const uniqueSortedArray = [...new Set(sortedArray)];

    return uniqueSortedArray;
}

// console.log(mergeArrays([1, 2], [4, 3, 3]))

/*
Complete the function to find the count of the most frequent item of an array. 
You can assume that input is an array of integers. 
For an empty array return 0
*/

function mostFrequentItemCount(arr) {
    let countObject = {};

    // Loop through the array and count occurrences of each element

    // arr.forEach(element => {
    //     if (countObject[element]) {
    //         countObject[element]++;
    //     } else {
    //         countObject[element] = 1;
    //     }
    // });

    arr.forEach(element => {
        // first iteration, ie. arr[0]
        // countObject = { '1': 1 }

        // second iteration, ie. arr[1]
        // countObject = { '1': 1, '2': 1 }

        // third iteration, ie. arr[2]
        // countObject = { '1': 2, '2': 1 }

        //...
        countObject[element] = (countObject[element] || false) + 1;
        // console.log(countObject);
    });

    // for (let element of arr) {
    //     if (countObject[element]) {
    //         countObject[element]++;
    //     } else {
    //         countObject[element] = 1;
    //     }
    // }

    console.log('final countObject', countObject);

    // Find the maximum count
    let maxCount = 0;
    for (let key in countObject) {
        if (countObject[key] > maxCount) {
            maxCount = countObject[key];
        }
    }

    return maxCount;
}

// console.log(mostFrequentItemCount([1, 2, 1, 3, 10, 5, 5, 1, 3, 3, 3]));
// console.log(mostFrequentItemCount([]));

/*
You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

The array is unsorted.

An example valid array would be [3, 2, 5, 1, 3, 4]. 
It has the integers 1 through 5 and 3 is duplicated. 
[1, 2, 4, 5, 5] would not be valid as it is missing 3.

You should return the duplicate value as a single integer.
*/

function findDup(arr) {
    const sortedArray = arr.sort();
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === sortedArray[i + 1]) {
            return sortedArray[i];
        }
    }
}

// console.log(findDup([4, 5, 2, 2, 3, 1]));


/*
DESCRIPTION:
You will be given an array which will include both integers and characters.

Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. There will always be 10 integers and 10 characters. Create a single string with the characters and return it as a[1] while maintaining the original order.

lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
Here is an example of your return

[3.6, "udiwstagwo"]
*/
function mean(lst) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let letters = [];
    let numbers = [];
    for (let el of lst) {
        if (alphabet.includes(el)) {
            letters.push(el);
        } else {
            numbers.push(Number(el));
      }
    }
    const average = numbers.reduce((a, b) => a + b) / numbers.length;
    const remainingLetters = letters.join('');
    return [average, remainingLetters];
}

// console.log(mean(['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']));

/*
returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.
*/

function isIntArray(arr) {
    if (!Array.isArray(arr) || arr === null) {
        return false;
    }

    if (arr.length === 0) {
        return true;
    }

    for (let el of arr) {
        // operator precedence: !, &&, || (in order)
        // 5; !(true OR (true AND true)) => !(true OR true) => !true => false => does not meet if conditions, does not return true.
        // 5.1; !(false OR (true AND false)) => !(false OR false) => !false => true => meets if conditions, return false.
        if (!(Number.isInteger(el) || (Number.isFinite(el) && el % 1 === 0))) {
            return false;
        }
    }

    return true;
}

console.log(isIntArray([1, 2, 2.1]));