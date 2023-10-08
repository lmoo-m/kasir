import database from "../config/database.js";
import { DataTypes } from "sequelize";

const food = database.define(
  "food",
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

export default food;
