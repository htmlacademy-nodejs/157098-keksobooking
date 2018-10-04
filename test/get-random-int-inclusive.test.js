'use strict';

const assert = require(`assert`);
const {getRandomIntInclusive} = require(`../src/utils/get-random-int-inclusive`);

describe(`Get random integer inclusive`, () => {
  const min = 0;
  const max = 3;

  it(`Returned value should be [${min}-${max}]`, () => {
    const result = getRandomIntInclusive(min, max);

    if (result < min || result > max) {
      assert.fail(`Result is: ${result}, but it's expected that the result is [${min}-${max}]`);
    }
  });

});
