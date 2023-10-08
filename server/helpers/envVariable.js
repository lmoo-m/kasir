import dotenv from "dotenv";

dotenv.config();

const variable = {
  hostname: process.env.hostname,
  database: process.env.database,
  user: process.env.user,
  password: process.env.password,
  port: process.env.PORT,
  dialect: process.env.dialect,
};

export default variable;
