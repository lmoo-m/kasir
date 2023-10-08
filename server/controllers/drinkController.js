import response from "../helpers/responseFormat.js";
import drink from "../models/drink.js";
import fs from "fs";

export const getDrink = async (req, res) => {
  try {
    const data = await drink.findAll();
    res.send(response(true, "success get drink", data));
  } catch (error) {
    console.log(error);
    res.send(response(false, "error get drink"));
  }
};

export const getDrinkById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await drink.findOne({ where: { id } });
    res.send(response(true, "success get drink", data));
  } catch (error) {
    console.log(error);
    res.send(response(false, "error get drink"));
  }
};

export const addDrink = async (req, res) => {
  try {
    const { name, price } = req.body;
    const image = req.file.path;
    const data = { name, price, image };
    await drink.create(data);
    res.send(response(true, "success add drink", data));
  } catch (error) {
    console.log(error);
    res.send(response(false, "error add drink"));
  }
};

export const updateDrink = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, price } = req.body;
    const image = req.file.path;
    const data = { name, price, image };
    await drink.update(data, {
      where: {
        id: id,
      },
    });
    res.send(response(true, "success update drink", data));
  } catch (error) {
    console.log(error);
    res.send(response(false, "error update drink"));
  }
};

export const deleteDrink = async (req, res) => {
  try {
    const id = req.params.id;
    const drinkSelect = await drink.findOne({
      where: {
        id: id,
      },
    });
    if (!drinkSelect) {
      res.send(response(false, "drink not found"));
    }
    fs.unlink(drinkSelect.image, (err) => {
      if (err) throw err;
    });
    await drinkSelect.destroy();
    res.send(response(true, "success delete drink"));
  } catch (error) {
    console.log(error);
    res.send(response(false, "error delete drink"));
  }
};
