'use strict';

const fs = require('fs');

module.exports = {
  up(queryInterface, Sequelize) {
    let data = JSON.parse(fs.readFileSync('./data/cast.json', 'utf8'))

    data.forEach(element => {
      element.createdAt = new Date();
      element.updatedAt = new Date();
    });

    return queryInterface.bulkInsert('Casts', data, {});
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Casts', null, {});
  }
};
