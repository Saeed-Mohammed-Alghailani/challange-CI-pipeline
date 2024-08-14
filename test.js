// test.js
const calculateSum = require('./calculateSum');

const numbers = [1, 2, 3, 4];
const expectedResult = 10;
const result = calculateSum(numbers);

if (result === expectedResult) {
    console.log('Test passed!');
    process.exit(0); // Exit with a status code of 0 (success)
} else {
    console.error('Test failed!');
    process.exit(1); // Exit with a status code of 1 (failure)
}
