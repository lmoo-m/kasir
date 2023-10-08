import { Router } from "express";
import {
  addFood,
  deleteFood,
  getFood,
  getFoodById,
  updateFood,
} from "../controllers/foodController.js";
import image from "../midleware/multerConfig.js";
import {
  addDrink,
  deleteDrink,
  getDrink,
  getDrinkById,
  updateDrink,
} from "../controllers/drinkController.js";

const route = Router();

route.get("/food", getFood);
route.get("/food/:id", getFoodById);
route.post("/food", image.single("image"), addFood);
route.patch("/food/:id", image.single("image"), updateFood);
route.delete("/food/:id", deleteFood);

route.get("/drink", getDrink);
route.get("/drink/:id", getDrinkById);
route.post("/drink", image.single("image"), addDrink);
route.patch("/drink/:id", image.single("image"), updateDrink);
route.delete("/drink/:id", deleteDrink);

export default route;
