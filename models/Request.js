"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Request.belongsTo(models.User, { foreignKey: "user_id" });
      // Request.hasMany(models.Technician, { foreignKey: "tech_id" });
    }
  }
  Request.init(
    {
      req_desc: DataTypes.STRING,
      req_start_date: DataTypes.DATE,
      req_end_date: DataTypes.DATE,
      user_id: DataTypes.INTEGER,
      tech_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Request",
    }
  );
  return Request;
};
