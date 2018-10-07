'use strict';

const assert = require(`assert`);
const {generateEntity} = require(`../src/generate-entity`);
const {isObject} = require(`../src/utils/is-object`);

describe(`Generate entity`, () => {
  it(`Function should return an object`, () => {
    assert.equal(isObject(generateEntity()), true);
  });
});
