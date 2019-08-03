'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    user_name: DataTypes.STRING,
    name: DataTypes.STRING,
    password: {
      type: DataTypes.VIRTUAL,
      validate: {
        min: 8,
        max: 32,
      }
    },
    password_hash: DataTypes.STRING,
  }, {
    underscored: true,
  });
  user.associate = function(models) {
    user.hasMany(models.location, {
      foreignKey: 'user_id',
      onDelete: 'cascade'
    })
  }

  user.findAllUsers = async () => {
    return await user.findAll({
      attributes: ['id', 'name', 'user_name']
    })
  }

  user.findById = async (id) => {
    let user = await user.findOne({
      where: { id: id },
      attributes: ['id', 'name', 'user_name']
    })
    .catch(error => {
      throw error
    })
    return user
  }

  user.prototype.authenticate = async (password) => {
    let isValid = await bcrypt.compare(password, this.password_hash)
    .catch(error => {
      throw error
    })
    return isValid
  }

  user.beforeCreate(async (user, options, callback) => {
    return bcrypt.hash(user.password, 10)
    .then(hash => {
      user.password_hash = hash
    })
    .catch(error => {
      throw error
    })
  })
  return user;
};