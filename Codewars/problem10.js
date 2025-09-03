// Write a function which takes a number as input and returns the sum of the absolute value of each
//  of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    let str = Math.abs(number).toString();
    
    let sum = 0;
    for (let digit of str) {
      sum += parseInt(digit);
    }
    
    return sum;
  }
  