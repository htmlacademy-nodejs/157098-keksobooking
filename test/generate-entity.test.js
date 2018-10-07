'use strict';

const assert = require(`assert`);
const {generateEntity} = require(`../src/generate-entity`);
const {isObject} = require(`../src/utils/is-object`);

describe(`Generate entity`, () => {
  console.log(`TEST`, generateEntity());
  console.log(`TEST2`, generateEntity());

  const entity = generateEntity();

  describe(`Entity`, () => {
    it(`Function should return an object`, () => {
      assert.ok(isObject(entity));
    });
  });

  describe(`Author property`, () => {
    const property = `author`;

    it(`Property "${property}" should be a property of entity`, () => {
      assert.ok(entity.hasOwnProperty(`${property}`));
    });

    it(`Type of "${property}" property should be object`, () => {
      assert.ok(isObject(entity[property]));
    });
  });

  describe(`Avatar property`, () => {
    const property = `avatar`;

    it(`Property "${property}" should be a property of "author"`, () => {
      assert.ok(entity.author.hasOwnProperty(property));
    });
  });
});
