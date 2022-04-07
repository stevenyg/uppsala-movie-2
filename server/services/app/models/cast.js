'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cast.belongsTo(models.Movie, { foreignKey: "MovieId" })

    }
  }
  Cast.init({
    MovieId: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "name is required"
        },
        notNull: {
          args: true,
          msg: "name is required"
        },
      }
    },
    profilePicture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cast',
  });
  return Cast;
};