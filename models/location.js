'use strict';

const modelOption = (models, as) => {
  var seqOption = {
      model: models.user,
      as: as,
      attributes: ['id', 'user_name', 'name']
  };
  return seqOption
}

module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define('location', {
    longitude: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE,
    user_id: DataTypes.INTEGER
  }, {
    underscored: true,
  })

  location.associate = function(models) {
    location.belongsTo(models.user, {
      foreignKey: 'user_id',
      targetKey: 'id',
      as: 'user'
    })
  }

  location.allLocations = async (models) => {
    let option = {
      include: [
          modelOption(models, 'user'),
      ]
    }
    let locations = await location.findAll(option)
    .catch(error => {
      throw error
    })
    return locations
  }

  return location;
}