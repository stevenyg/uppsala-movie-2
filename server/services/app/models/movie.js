'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.hasMany(models.Cast, { foreignKey: "MovieId" })
      Movie.belongsTo(models.Genre, { foreignKey: "GenreId" })
    }
  }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "title is required"
        },
        notNull: {
          args: true,
          msg: "title is required"
        },
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "slug is required"
        },
        notNull: {
          args: true,
          msg: "slug is required"
        },
      }
    },
    synopsis: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "synopsis is required"
        },
        notNull: {
          args: true,
          msg: "synopsis is required"
        },
      }
    },
    trailerUrl: DataTypes.TEXT,
    imageUrl: DataTypes.TEXT,
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
      }
    },
    GenreId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });

  return Movie;
};