"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Request, { foreignKey: "user_id" });

      User.belongsToMany(models.Technician, {
        through: "Request",
        foreignKey: "user_id",
        otherKey: "tech_id",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      age: DataTypes.INTEGER,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
