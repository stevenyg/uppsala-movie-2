'use strict';
const {
  Model
} = require('sequelize');
// const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "email is required"
        },
        notNull: {
          args: true,
          msg: "email is required"
        },
        isEmail: {
          args: true,
          msg: "email format is invalid"
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "email is required"
        },
        notNull: {
          args: true,
          msg: "email is required"
        },
        len: [5, 50],
      }
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  // User.beforeCreate((instance, option) => {
  //   instance.password = hashPassword(instance.password)
  // })

  return User;
};