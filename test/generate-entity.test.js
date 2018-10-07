'use strict';

const assert = require(`assert`);
const {mockedEntityData} = require(`../src/generate-entity`);
const {generateEntity} = require(`../src/generate-entity`);
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
      assert.ok(typeof avatar === `string`);
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
    const property = `address`;
    const address = entity.offer.address;
    const location = entity.location;

    it(`Should be a property of "offer"`, () => {
      assert.ok(entity.offer.hasOwnProperty(property));
    });

    it(`Should have correct value`, () => {
      assert.equal(address, `${location.x}, ${location.y}`);
    });
  });

  describe(`Price property`, () => {
    const property = `price`;
    const min = mockedEntityData.offer.price.min;
    const max = mockedEntityData.offer.price.max;
    const price = entity.offer.price;

    it(`Should be a property of "offer"`, () => {
      assert.ok(entity.offer.hasOwnProperty(property));
    });

    it(`Should be in number type`, () => {
      assert.ok(typeof price === `number`);
    });

    it(`Should be in [${min}-${max}] range`, () => {
      assert.ok(price >= min && price <= max);
    });
  });

  describe(`Type property`, () => {
    const property = `type`;
    const type = entity.offer.type;

    it(`Should be a property of "offer"`, () => {
      assert.ok(entity.offer.hasOwnProperty(property));
    });

    it(`Should exist in provided mocked data`, () => {
      assert.notEqual(mockedEntityData.offer.types.indexOf(type), -1);
    });
  });

  describe(`Rooms property`, () => {
    const property = `rooms`;
    const rooms = entity.offer.rooms;
    const min = mockedEntityData.offer.rooms.min;
    const max = mockedEntityData.offer.rooms.max;

    it(`Should be a property of "offer"`, () => {
      assert.ok(entity.offer.hasOwnProperty(property));
    });

    it(`Should be in number type`, () => {
      assert.ok(typeof rooms === `number`);
    });

    it(`Should be in [${min}-${max}] range`, () => {
      assert.ok(rooms >= min && rooms <= max);
    });
  });

  describe(`Guests property`, () => {
    const property = `guests`;
    const guests = entity.offer.guests;
    const min = mockedEntityData.offer.guests.min;
    const max = mockedEntityData.offer.guests.max;

    it(`Should be a property of "offer"`, () => {
      assert.ok(entity.offer.hasOwnProperty(property));
    });

    it(`Should be in number type`, () => {
      assert.ok(typeof guests === `number`);
    });

    it(`Should be in [${min}-${max}] range`, () => {
      assert.ok(guests >= min && guests <= max);
    });
  });

  describe(`Checkin property`, () => {
    const property = `checkin`;
    const checkin = entity.offer.checkin;

    it(`Should be a property of "offer"`, () => {
      assert.ok(entity.offer.hasOwnProperty(property));
    });

    it(`Should exist in provided mocked data`, () => {
      assert.notEqual(mockedEntityData.offer.checkin.indexOf(checkin), -1);
    });
  });

  describe(`Checkout property`, () => {
    const property = `checkout`;
    const checkout = entity.offer.checkout;

    it(`Should be a property of "offer"`, () => {
      assert.ok(entity.offer.hasOwnProperty(property));
    });

    it(`Should exist in provided mocked data`, () => {
      assert.notEqual(mockedEntityData.offer.checkout.indexOf(checkout), -1);
    });
  });

  describe(`Features property`, () => {
    const property = `features`;
    const features = entity.offer.features;

    it(`Should be a property of "offer"`, () => {
      assert.ok(entity.offer.hasOwnProperty(property));
    });

    it(`Should be array type`, () => {
      assert.ok(Array.isArray(features));
    });

    it(`Features elements should exist in provided mocked data`, () => {
      const mockedData = mockedEntityData.offer.features;

      for (const item of features) {
        if (!mockedData.includes(item)) {
          assert.fail(`${item} doesn't exist in mocked data`);
        }
      }
    });

    it(`Features data should have unique elements`, () => {
      const entityFeatures = entity.offer.features;
      const countedEntityFeatures = entityFeatures.reduce((acc, feature) => {
        if (!acc.hasOwnProperty(feature)) {
          acc[feature] = 1;
        } else {
          acc[feature] += 1;
        }

        return acc;
      }, {});

      const isDataNotUnique = Object.values(countedEntityFeatures).some((entityValue) => entityValue > 1);

      if (isDataNotUnique) {
        assert.fail(`Data is not unique`);
      }
    });
  });

  describe(`Description property`, () => {
    const property = `description`;
    const description = entity.offer.description;

    it(`Should be a property of "offer"`, () => {
      assert.ok(entity.offer.hasOwnProperty(property));
    });

    it(`Should be a string`, () => {
      assert.ok(typeof description === `string`);
    });
  });

  describe(`Photos property`, () => {
    const property = `photos`;
    const photos = entity.offer.photos;

    it(`Should be a property of "offer"`, () => {
      assert.ok(entity.offer.hasOwnProperty(property));
    });

    it(`Should be array type`, () => {
      assert.ok(Array.isArray(photos));
    });

    it(`Features elements should exist in provided mocked data`, () => {
      const mockedData = mockedEntityData.offer.photos;

      for (const item of photos) {
        if (!mockedData.includes(item)) {
          assert.fail(`${item} doesn't exist in mocked data`);
        }
      }
    });
  });

  describe(`Location property`, () => {
    const property = `location`;

    it(`Should be a property of entity`, () => {
      assert.ok(entity.hasOwnProperty(`${property}`));
    });
  });

  describe(`x/y properties`, () => {
    const location = entity.location;
    const mockedLocation = mockedEntityData.location;

    it(`Should be properties of location`, () => {
      assert.ok(location.hasOwnProperty(`x`) && location.hasOwnProperty(`y`));
    });

    it(`x should be in [${mockedLocation.x.min}-${mockedLocation.x.max}] range`, () => {
      assert.ok(location.x >= mockedLocation.x.min && location.x <= mockedLocation.x.max);
    });

    it(`y should be in [${mockedLocation.y.min}-${mockedLocation.y.max}] range`, () => {
      assert.ok(location.y >= mockedLocation.y.min && location.y <= mockedLocation.y.max);
    });
  });

  describe(`Date property`, () => {
    const property = `date`;

    it(`Should be a property of entity`, () => {
      assert.ok(entity.hasOwnProperty(`${property}`));
    });
  });
});
