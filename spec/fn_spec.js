var lib = require('./../fn');

//Some arrays for inputs
var input = [1,2,3,4,5];
var in2 = ['foo', 'bar', 'baz'];
var mixed = [1,3,'asdf', 'foo', 5];

//Some functions for callbacks
var square = function (n) {
  return n*n;
}
var cut = function (str) {
  return str.substr(2);
}
var isString = function (thing) {
  return typeof(thing) === 'string';
}
var isNum = function (thing) {
  return typeof(thing) === 'number';
}
var matchEx = function (thing) {
  return thing.match(/a/);
}
var gtThree = function (thing) {
  return thing > 3;
}

describe('map', function () {
  it('maps a new array based on a given array and a callback', function () {
    expect(lib.map(input, square)).toEqual([1,4,9,16,25]);
    expect(lib.map(in2, cut)).toEqual(['o', 'r', 'z']);
  });
});
describe('filter', function () {
  it('filters an array based on a user submitted callback function', function () {
    expect(lib.filter(input, gtThree)).toEqual([4,5]);
    expect(lib.filter(in2, matchEx)).toEqual(['bar', 'baz']);
  });
});
describe('every', function () {
  it('returns true if every item in an array satisfies a condition', function () {
    expect(lib.every(in2, isString)).toEqual(true);
    expect(lib.every(input, isNum)).toEqual(true);
    expect(lib.every(in2, isNum)).toEqual(false);
  })
})
describe('some', function () {
  it('returns true if any item in an array satisfies a condition', function () {
    expect(lib.some(input, isString)).toEqual(false);
    expect(lib.some(input, isNum)).toEqual(true);
    expect(lib.some(mixed, isNum)).toEqual(true);
  })
})
describe('none', function () {
  it('returns true if all items in an array do not satisfy a condition', function () {
    expect(lib.none(in2, isString)).toEqual(false);
    expect(lib.none(input, isNum)).toEqual(false);
    expect(lib.none(in2, isNum)).toEqual(true);
    expect(lib.none(input, isString)).toEqual(true);
    expect(lib.none(mixed, isNum)).toEqual(false);
    expect(lib.none(mixed, isString)).toEqual(false);
  })
})
