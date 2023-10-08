import { Sequelize } from "sequelize";
import variable from "../helpers/envVariable.js";

const database = new Sequelize(
  variable.database,
  variable.user,
  variable.password,
  {
    dialect: variable.dialect,
    host: variable.hostname,
  }
);

export default database;
