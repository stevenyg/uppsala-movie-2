'use strict';

const fs = require('fs');

module.exports = {
  up(queryInterface, Sequelize) {

    let data = JSON.parse(fs.readFileSync('./data/movie.json', 'utf8'))

    data.forEach(element => {
      element.createdAt = new Date();
      element.updatedAt = new Date();
    });

    return queryInterface.bulkInsert('Movies', data, {});

  },

  down(queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Movies', null, {});
  }
};
