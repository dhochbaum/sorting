describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([1, 2])).toEqual([[1], [2]]);
  });
  it('is able to split an array odd length array into two halves', function() {
    // your code here
    expect(split([1, 2, 3])).toEqual([[1, 2], [3]]);
  });
});
describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
    expect(merge([1,3,5], [2,4])).toEqual([1,2,3,4,5])
  });
  it('is able to merge an array with a single element', function(){
    expect(merge([1], [])).toEqual([1])
  })
});

describe('mergeSort function', function() {
  it('return a sorted array', function() {
    // test the merging algorithm
    expect(mergeSort([1,3,5,2,4])).toEqual([1,2,3,4,5])
  });
  it('return a sorted long array', function() {
    // test the merging algorithm
    expect(mergeSort([1,3,5,2,4,34,13,7,99])).toEqual([1,2,3,4,5,7,13,34,99])
  });
});