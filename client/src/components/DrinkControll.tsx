"use client";

import React, { useEffect, useState } from "react";
import Form from "./Form";
import { AnimatePresence } from "framer-motion";
import { AiFillDelete } from "react-icons/ai";
import server from "@/helpers/axiosConnect";

export default function DrinkControll() {
  const [show, setShow] = useState(false);
  const [drink, setDrink] = useState([]);

  const getDrink = async () => {
    const { data } = await server.get("/drink");
    setDrink(data.data);
  };

  const deleteDrink = async (id: number) => {
    await server.delete(`/drink/${id}`);
    getDrink();
  };

  useEffect(() => {
    getDrink();
  }, []);

  return (
    <>
      <div className="w-[100%] mt-3 relative">
        <button
          className="mb-3 border-2 border-yellow-300  py-1 px-3 rounded-md hover:bg-yellow-300 hover:text-white transition ease-in-out"
          onClick={() => setShow(true)}
        >
          New
        </button>
        <AnimatePresence
          initial={false}
          // exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {show ? (
            <Form setShow={setShow} action={getDrink} post="/drink" />
          ) : (
            ""
          )}
        </AnimatePresence>
        <table
          className="table-fixed w-full 
          "
        >
          <thead>
            <tr>
              <th className="w-12 border border-yellow-300 p-1">Id</th>
              <th className="border border-yellow-300"> Food</th>
              <th className="border border-yellow-300">Price</th>
              <th className="border border-yellow-300">....</th>
            </tr>
          </thead>
          <tbody>
            {drink.map((data: any, i: number) => {
              return (
                <tr key={i} className=" hover:bg-yellow-300 transition">
                  <td className="text-center border border-yellow-300 p-1">
                    {data.id}
                  </td>
                  <td className="border border-yellow-300">{data.name}</td>
                  <td className="border border-yellow-300">{data.price}</td>
                  <td className="border border-yellow-300 flex justify-center">
                    <button
                      onClick={() => deleteDrink(data.id)}
                      className="flex items-center py-1 px-2 gap-1 border-red-500 border-2 rounded-md hover:bg-red-500 hover:text-white transition"
                    >
                      <AiFillDelete /> Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
