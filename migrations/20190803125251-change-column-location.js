'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn('locations', 'longitude', {
          type: Sequelize.DOUBLE,
          allowNull: false
        }, { transaction: t }),
        queryInterface.changeColumn('locations', 'longitude', {
          type: Sequelize.DOUBLE,
          allowNull: false
        }, { transaction: t }),
        queryInterface.changeColumn('locations', 'user_id', {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id'
          }
        }, { transaction: t }),
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn('locations', 'longitude', {
          type: Sequelize.DOUBLE,
        }, { transaction: t }),
        queryInterface.changeColumn('locations', 'longitude', {
          type: Sequelize.DOUBLE,
        }, { transaction: t }),
        queryInterface.changeColumn('locations', 'user_id', {
          type: Sequelize.INTEGER,
        }, { transaction: t }),
      ])
    })
  }
};
