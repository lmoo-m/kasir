"use client";

import Card from "@/components/Card";
import { BsArrowLeft } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import server from "@/helpers/axiosConnect";
import Link from "next/link";
import { motion } from "framer-motion";

interface drink {
  id: number;
  name: string;
  price: string;
  image: string;
}

export default function page() {
  const [drink, setDrink] = useState([]);

  const getDrink = async () => {
    const { data } = await server.get("/drink");
    setDrink(data.data);
  };

  useEffect(() => {
    getDrink();
  }, []);

  return (
    <div>
      <div className="px-2">
        <div className="flex items-center gap-2">
          <Link
            href={"/"}
            className=" bg-slate-200 rounded-lg py-1 px-3 scale-95"
          >
            <BsArrowLeft />
          </Link>
          <h5 className="font-light tracking-widest text-sm">Foods </h5>
        </div>
      </div>
      <div className="px-5 font-bold mt-5">
        <h1>Foods</h1>
        <motion.div
          layout
          className="mt-5 flex flex-wrap gap-10 overflow-y-scroll h-[30rem] pb-5 "
        >
          {drink.map((drink: drink, id: number) => {
            return (
              <Card
                key={id}
                price={drink.price}
                title={drink.name}
                image={drink.image}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
