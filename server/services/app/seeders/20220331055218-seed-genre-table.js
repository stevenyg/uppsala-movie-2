'use strict';

const fs = require('fs');

module.exports = {
  up(queryInterface, Sequelize) {

    let data = JSON.parse(fs.readFileSync('./data/genre.json', 'utf8'))

    data.forEach(element => {
      element.createdAt = new Date();
      element.updatedAt = new Date();
    });

    return queryInterface.bulkInsert('Genres', data, {});

  },

  down(queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Genres', null, {});

  }
};
