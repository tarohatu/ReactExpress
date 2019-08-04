'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn('locations', 'latitude', {
          type: Sequelize.DOUBLE,
          allowNull: false
        }, { transaction: t }),
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn('locations', 'latitude', {
          type: Sequelize.DOUBLE,
        }, { transaction: t }),
      ])
    })
  }
};
