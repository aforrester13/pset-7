function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }

  if (a.length < 1 || b.length < 1) {
    return false;
  }

  if (a[0] === b[0] || a[a.length - 1] === b[b.length - 1]) {
    return true;
  } else {
    return false;
  }
}

function endsMeet(values, n) {

  let array = []

  if (!values || values.length < n || !Number.isInteger(n) || n < 0) {
    return array;
  } else {
      if (n === 0) {
        return values;
      }

      for (let i = 0; i < n; i++) {
        if (values[i] !== undefined) {
          array.push(values[i])
        }
      }

      for (let i = n; i > 0; i--) {
        if (values[values.length - i] !== undefined) {
          array.push(values[values.length - i])
        }
      }
      return array;
  }
}

function difference(numbers) {


  if (numbers == undefined || numbers < 1 || numbers.some(isNaN)) {
    return undefined;
  } else {

    let bigInteger = Math.max.apply(null, numbers)
    let smallInteger = Math.min.apply(null, numbers)

    let difference = bigInteger - smallInteger

    return difference
  }



}

function max(number) {

  if (number == undefined || number <= 2 || number.some(isNaN)) {

    return undefined;

  } else if (number.length % 2 == 0) {

    return undefined;

  } else {
     let lastElement = number[number.length - 1]
     let middleElement = number[number.length - (Math.ceil(number.length / 2))]
     let firstElement = number[0]

     let array = [firstElement, middleElement, lastElement]

     let largestValue = Math.max.apply(null, array)

     return largestValue;
  }
}

function middle(values) {
  let array = [];

  if (values == undefined) {

    return [];

  } else if (values.length < 3) {

    return [];

  } else if (values.length % 2 == 0) {
    return [];
  } else {
    let veryMiddleElement = values[values.length - (Math.ceil(values.length / 2))]
    let leftMiddleElement = values[(values.length - 1) - (Math.ceil(values.length / 2))]

    array.push(leftMiddleElement, veryMiddleElement)

    return array;
  }
}

function increasing(numbers) {
  if (numbers == undefined || numbers == []) {
    return undefined;
  } else if (numbers.length < 3 || numbers.some(isNaN)) {
    return undefined;
  } else {

    for (let i = 1; i < numbers.length; i++) {
      if ((numbers[i - 1] + 1) === numbers[i]) {
        i++
        if ((numbers[i - 1] + 1) === numbers[i]) {
          return true;
          break;
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
    return false;
  }
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
