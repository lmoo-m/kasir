import React, { useState } from "react";
import FoodControll from "../components/FoodControll";
import DrinkControll from "@/components/DrinkControll";
import Card from "./Card";

interface props {
  navigate: string;
  setNavigate: any;
}

const components = [
  {
    title: "Food",
    element: <FoodControll />,
    image: "public/foods.png",
  },
  {
    title: "Drink",
    element: <DrinkControll />,
    image: "public/drink.png",
  },
];

export default function Dashboard({ navigate, setNavigate }: props) {
  const [food, setFood] = useState("");
  const element = components.filter((e) => e.title === navigate)[0] || "";

  return (
    <>
      {navigate === element.title
        ? element.element
        : components.map((component: any, i: number) => {
            return (
              <button key={i} onClick={() => setNavigate(component.title)}>
                <Card
                  price=""
                  title={component.title}
                  image={component.image}
                />
              </button>
            );
          })}

      {/* <DrinkControll drink={drink} setDrink={setDrink}/> */}
    </>
  );
}
