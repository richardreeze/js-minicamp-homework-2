// Do not change any of the function names

function getBiggest(x, y) {
  if(x === y){
    return x;
  } else if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  }
}

function greeting(language) {
  if (language === 'German'){
    return 'Guten Tag!';
  } else if (language === 'English'){
    return 'Hello!';
  } else if (language === 'Spanish'){
    return 'Hola!';
  } else {
    return 'Hello!';
  }
}

function isTenOrFive(num) {
  if(num === 10 || num === 5){
    return true;
  } else {
    return false;
  }
}

function isInRange(num) {
  if(num < 50 && num > 20){
    return true;
  } else {
    return false;
  }
}

function isInteger(num) {
  if (num === Math.floor(num)){
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0){
    return 'fizzbuzz';
  } else if (num % 3 === 0){
    return 'fizz';
  } else if (num % 5 === 0){
    return 'buzz';
  } else {
    return num;
  }
}

function isPrime(num) {
  if(num === 0 || num === 1){
    return false;
  } else {
    for (var i = 2; i < num; i++){
      if(num % i === 0){
        return false;
      } else if (num % num === 0 && num / 1 === num){
        return true;
      }
    }
  }
}

function returnFirst(arr) {
  return arr[0];
}

function returnLast(arr) {
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i] + 1;
  }
  return arr;
}

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  var string = '';
  for(var i = 0; i < words.length; i++){
    string += words[i] + ' ';
  }
  return string.trim();
}

function contains(arr, item) {
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === item){
      return true;
    }
  }
  return false;
}

function addNumbers(numbers) {
  var number = 0;
  for(var i = 0; i < numbers.length; i++){
    number += numbers[i];
  }
  return number;
}

function averageTestScore(testScores) {
  var total = 0;
  for(var i = 0; i < testScores.length; i++){
    total += testScores[i];
  }
  return total / testScores.length;
}

function largestNumber(numbers) {
  var largest = numbers[0];
  for(var i = 0; i < numbers.length; i++){
    if(numbers[i] > largest){
      largest = numbers[i];
    }
  }
  return largest;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
