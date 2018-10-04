'use strict';

const assert = require(`assert`);
const {shuffleArray} = require(`../src/utils/shuffle-array`);

describe(`Shuffle array`, () => {
  it(`Result should have the same length as passed array`, () => {
    const testData = [1, 2, 3];
    assert.equal(shuffleArray(testData).length, testData.length);
  });

  it(`Firing of the function should not modify passed array`, () => {
    const testData = [1, 2, 3];
    const testDataSnapshot = [...testData];
    shuffleArray(testData);

    assert.equal(testData, testDataSnapshot);
  });
});
