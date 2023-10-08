import response from "../helpers/responseFormat.js";
import food from "../models/food.js";
import fs from "fs";

export const getFood = async (req, res) => {
  try {
    const data = await food.findAll();
    res.send(response(true, "success get food", data));
  } catch (error) {
    console.log(error);
    res.send(response(false, "error get food"));
  }
};

export const getFoodById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await food.findOne({ where: { id } });
    res.send(response(true, "success get food", data));
  } catch (error) {
    console.log(error);
    res.send(response(false, "error get food"));
  }
};

export const addFood = async (req, res) => {
  try {
    const { name, price } = req.body;
    const image = req.file.path;
    const data = { name, price, image };
    await food.create(data);
    res.send(response(true, "success add food", data));
  } catch (error) {
    console.log(error);
    res.send(response(false, "error add food"));
  }
};

export const updateFood = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, price } = req.body;
    const image = req.file.path;
    const data = { name, price, image };
    await food.update(data, {
      where: {
        id: id,
      },
    });
    res.send(response(true, "success update food", data));
  } catch (error) {
    console.log(error);
    res.send(response(false, "error update food"));
  }
};

export const deleteFood = async (req, res) => {
  try {
    const id = req.params.id;
    const foodSelect = await food.findOne({
      where: {
        id: id,
      },
    });
    if (!foodSelect) {
      res.send(response(false, "food not found"));
    }
    fs.unlink(foodSelect.image, (err) => {
      if (err) throw err;
    });
    await foodSelect.destroy();
    res.send(response(true, "success delete food"));
  } catch (error) {
    console.log(error);
    res.send(response(false, "error delete food"));
  }
};
