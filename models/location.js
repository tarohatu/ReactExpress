'use strict';
module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define('location', {
    longitude: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE,
    user_id: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  location.associate = function(models) {
    location.belongsTo(models.user, {
      foreignKey: 'user_id',
      targetKey: 'id',
      as: 'user'
    })
  };
  return location;
};