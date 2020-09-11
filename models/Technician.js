"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Technician extends Model {
    static associate(models) {
      Technician.belongsTo(models.Category, { foreignKey: "cat_id" });

      // Technician.hasMany(models.Request, { foreignKey: "id" });
      //Room.hasMany(models.User, { foreignKey: "userId" });

      Technician.belongsToMany(models.User, {
        through: "Request",
        foreignKey: "tech_id",
        otherKey: "user_id",
      });
    }
  }

  Technician.init(
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      age: DataTypes.INTEGER,
      img: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      address: DataTypes.STRING,
      cat_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Technician",
    }
  );
  return Technician;
};
