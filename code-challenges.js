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