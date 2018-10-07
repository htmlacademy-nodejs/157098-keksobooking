'use strict';

const assert = require(`assert`);
const {generateEntity} = require(`../src/generate-entity`);
const {mockedEntityData} = require(`../src/generate-entity`);
const {isObject} = require(`../src/utils/is-object`);

describe(`Generate entity`, () => {
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
    const avatar = entity.author.avatar;
    const baseUrl = `${mockedEntityData.author.avatar}/`;

    it(`Should be a property of "author"`, () => {
      assert.ok(entity.author.hasOwnProperty(property));
    });

    it(`Should be string type`, () => {
      assert.equal(typeof avatar, `string`);
    });

    it(`Should have correct url`, () => {
      assert.notEqual(avatar.indexOf(baseUrl), -1);
      assert.equal(avatar.indexOf(baseUrl), 0);
      assert.ok(baseUrl.length < avatar.length);
    });
  });

  describe(`Offer property`, () => {
    const property = `offer`;

    it(`Should be a property of entity`, () => {
      assert.ok(entity.hasOwnProperty(`${property}`));
    });

    it(`Should be object type`, () => {
      assert.ok(isObject(entity[property]));
    });
  });

  describe(`Title property`, () => {
    const property = `title`;
    const title = entity.offer.title;

    it(`Should be a property of "offer"`, () => {
      assert.ok(entity.offer.hasOwnProperty(property));
    });

    it(`Should have string type`, () => {
      assert.equal(typeof title, `string`);
    });

    it(`Should exist in provided mocked data`, () => {
      assert.notEqual(mockedEntityData.offer.titles.indexOf(title), -1);
    });
  });

  describe(`Address property`, () => {
    const address = entity.offer.address;
    const location = entity.location;

    it(`Should have correct value`, () => {
      assert.equal(address, `${location.x}, ${location.y}`);
    });
  });
});
