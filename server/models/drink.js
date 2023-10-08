import database from "../config/database.js";
import { DataTypes } from "sequelize";

const drink = database.define(
  "drink",
  {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    freezeTableName: false,
    timestamps: false,
  }
);

export default drink;
