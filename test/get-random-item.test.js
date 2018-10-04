'use strict';

const assert = require(`assert`);
const {getRandomItem} = require(`../src/utils/get-random-item`);

describe(`Get random item`, () => {

  it(`Randomly picked item should exist in a given array`, () => {
    const testData = [`red`, `green`, `blue`];
    const randomItem = getRandomItem(testData);
    const randomItemIdx = testData.findIndex((item) => item === randomItem);

    assert.notEqual(randomItemIdx, -1);
  });

});
