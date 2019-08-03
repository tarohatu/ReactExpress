'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn('users', 'password_hash', {
          type: Sequelize.STRING,
          allowNull: false
        }, { transaction: t }),
        queryInterface.changeColumn('users', 'user_name', {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
        }, { transaction: t }),
        queryInterface.changeColumn('users', 'name', {
          type: Sequelize.STRING,
          allowNull: false
        }, { transaction: t })
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('users', 'password_hash', { transaction: t }),
        queryInterface.removeColumn('users', 'user_name', { transaction: t }),
        queryInterface.changeColumn('users', 'name', {
          type: Sequelize.STRING
        }, { transaction: t })
      ])
    })
  }
};
