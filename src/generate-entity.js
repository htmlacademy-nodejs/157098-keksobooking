'use strict';

const {getRandomItem} = require(`./utils/get-random-item`);
const {getRandomIntInclusive} = require(`./utils/get-random-int-inclusive`);
const {shuffleArray} = require(`./utils/shuffle-array`);
const {generateEntityDate} = require(`./utils/generate-entity-date`);

const mockedEntityData = {
  author: {
    avatar: `https://robohash.org`,
  },
  offer: {
    titles: [
      `Большая уютная квартира`,
      `Маленькая неуютная квартира`,
      `Огромный прекрасный дворец`,
      `Маленький ужасный дворец`,
      `Красивый гостевой домик`,
      `Некрасивый негостеприимный домик`,
      `Уютное бунгало далеко от моря`,
      `Неуютное бунгало по колено в воде`
    ],
    address: `400, 300`,
    price: {
      min: 1000,
      max: 1000000,
    },
    types: [
      `flat`,
      `palace`,
      `house`,
      `bungalo`,
    ],
    rooms: {
      min: 1,
      max: 5,
    },
    guests: {
      min: 1,
      max: 10,
    },
    checkin: [
      `12:00`,
      `13:00`,
      `14:00`,
    ],
    checkout: [
      `12:00`,
      `13:00`,
      `14:00`,
    ],
    features: [
      `wifi`,
      `dishwasher`,
      `parking`,
      `washer`,
      `elevator`,
      `conditioner`,
    ],
    photos: [
      `http://o0.github.io/assets/images/tokyo/hotel1.jpg`,
      `http://o0.github.io/assets/images/tokyo/hotel2.jpg`,
      `http://o0.github.io/assets/images/tokyo/hotel3.jpg`
    ],
  },
  location: {
    x: {
      min: 300,
      max: 900,
    },
    y: {
      min: 150,
      max: 500,
    },
  },
};

const generateString = () => Math.random().toString(36).substring(7);

const generateEntity = () => {
  const location = {
    x: getRandomIntInclusive(mockedEntityData.location.x.min, mockedEntityData.location.x.max),
    y: getRandomIntInclusive(mockedEntityData.location.y.min, mockedEntityData.location.y.max),
  };

  return {
    author: {
      avatar: `${mockedEntityData.author.avatar}/${generateString()}`
    },
    offer: {
      title: getRandomItem(mockedEntityData.offer.titles),
      address: `${location.x}, ${location.y}`,
      price: getRandomIntInclusive(mockedEntityData.offer.price.min, mockedEntityData.offer.price.max),
      type: getRandomItem(mockedEntityData.offer.types),
      rooms: getRandomIntInclusive(mockedEntityData.offer.rooms.min, mockedEntityData.offer.rooms.max),
      guests: getRandomIntInclusive(mockedEntityData.offer.guests.min, mockedEntityData.offer.guests.max),
      checkin: getRandomItem(mockedEntityData.offer.checkin),
      checkout: getRandomItem(mockedEntityData.offer.checkout),
      features: shuffleArray(mockedEntityData.offer.features),
      description: ``,
      photos: shuffleArray(mockedEntityData.offer.photos),
    },
    location: {
      x: location.x,
      y: location.y,
    },
    date: generateEntityDate(Date.now(), getRandomIntInclusive(0, 7)),
  };
};

module.exports = {
  generateEntity,
  mockedEntityData,
};
