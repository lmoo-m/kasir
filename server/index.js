import express from "express";
import cors from "cors";
import database from "./config/database.js";
import food from "./models/food.js";
import route from "./routes/route.js";
import variable from "./helpers/envVariable.js";
import drink from "./models/drink.js";

const port = variable.port;
const app = express();

try {
  database.authenticate();
  food.sync();
  drink.sync();
  console.log("database connected");
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(cors());
app.use("/public", express.static("public"));
app.use(route);

app.listen(port, () => console.log(`running in port ${port}`));
