'use strict';

const assert = require(`assert`);
const {generateEntity} = require(`../src/generate-entity`);
const {isObject} = require(`../src/utils/is-object`);

describe(`Generate entity`, () => {
  console.log(`TEST`, generateEntity());
  console.log(`TEST2`, generateEntity());

  it(`Function should return an object`, () => {
    assert.ok(isObject(generateEntity()));
  });
});
