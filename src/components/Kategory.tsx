"use client";

import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import Image from "next/image";
import FormCategory from "./FormCategory";
import { AnimatePresence } from "framer-motion";
import { AiFillDelete } from "react-icons/ai";

interface props {
  kategory: string;
  setKategory: any;
}

export default function Kategory({ kategory, setKategory }: props) {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    const res = await fetch("/api/category", { next: { revalidate: 0 } });
    const { data } = await res.json();
    setCategory(data);
  };

  const deleteCategory = async (id: number) => {
    await fetch("/api/category", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    getCategory();
  };

  useEffect(() => {
    getCategory();
  }, [show]);

  return (
    <>
      {kategory != "Category" ? (
        <button onClick={() => setKategory("Category")}>
          <Card
            price=""
            title="Category"
            image={
              <Image
                src="/images/food&drink.png"
                width={150}
                height={150}
                alt="food and drink"
              />
            }
          />
        </button>
      ) : (
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
            {show ? <FormCategory setShow={setShow} /> : ""}
          </AnimatePresence>
          <table
            className="table-fixed w-full 
          "
          >
            <thead>
              <tr>
                <th className="w-12 border border-yellow-300 p-1">Id</th>
                <th className="border border-yellow-300"> Category</th>
                <th className="border border-yellow-300">Type</th>
                <th className="border border-yellow-300">....</th>
              </tr>
            </thead>
            <tbody>
              {category.map((data: any, i: number) => {
                return (
                  <tr key={i} className=" hover:bg-yellow-300 transition">
                    <td className="text-center border border-yellow-300 p-1">
                      {data.id}
                    </td>
                    <td className="border border-yellow-300">{data.title}</td>
                    <td className="border border-yellow-300">{data.type}</td>
                    <td className="border border-yellow-300 flex justify-center">
                      <button
                        onClick={() => deleteCategory(data.id)}
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
      )}
    </>
  );
}
