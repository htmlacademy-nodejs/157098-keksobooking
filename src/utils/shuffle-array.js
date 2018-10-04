'use strict';

const {getRandomItem} = require(`./get-random-item`);

const shuffleArray = (arr) => {
  const arrClone = [...arr];
  const shuffledArr = [];

  while (arrClone.length) {
    const randomItemIdx = arrClone.indexOf(getRandomItem(arrClone));
    const splicedItem = arrClone.splice(randomItemIdx, 1);

    shuffledArr.push(...splicedItem);
  }

  return shuffledArr;
};


module.exports = {
  shuffleArray,
};
