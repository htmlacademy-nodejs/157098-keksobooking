'use strict';

const generateEntityDate = (date, amount) => {
  const dateCopy = new Date(date);
  const result = new Date(dateCopy.setDate(dateCopy.getDate() + amount));

  return `${result.getFullYear()}-${result.getMonth()}-${result.getDate()}`;
};

module.exports = {
  generateEntityDate,
};
