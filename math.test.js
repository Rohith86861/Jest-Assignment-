const { test, expect } = require('@jest/globals');
const { maxOf2,sum, multiply, division, maxOf3, factorial, evenOrOdd, largestInArray, linearSearch } = require('./math');
// var sum = require('./math');
// var multiply = require('./math');
// var division = require('./math');

test('testing sum()', () =>{
  expect(sum(3,2)).toBe(5);
});

test('testing multiply()', () =>{
  expect(multiply(3,2)).toBe(6);
});

test('testing divison()', () =>{
  expect(division(4,2)).toBe(2);
});

test('testing maxOf2()', () =>{
  expect(maxOf2(2,3)).toBe(3);
});

test('testing maxOf3()', () =>{
  expect(maxOf3(1,2,3)).toBe(3);
});

test('test factorial()', () =>{
  expect(factorial(4)).toBe(24);
});

test('test evenOrOdd()', () =>{
  expect(evenOrOdd(4)).toBeTruthy()
});

test('test largestInArray()', () =>{
  var array = [1, 2, 3, 4, 5, 6, 7];
  expect(largestInArray(array)).toBe(7);
});

test('test linearSearch()', () =>{
  var array = [1, 2, 3, 4, 5, 6, 7];
  expect(linearSearch(array,6)).toBeTruthy();
});