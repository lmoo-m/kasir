"use client";

import Card from "@/components/Card";
import { BsArrowLeft } from "react-icons/bs";
import React, { useState } from "react";

export default function page() {
  const [kategory, setKategory] = useState("");

  return (
    <div>
      <div className="px-2">
        <div className="flex items-center gap-2">
          <button
            className=" bg-slate-200 rounded-lg py-1 px-3 scale-95"
            onClick={() => setKategory("")}
          >
            <BsArrowLeft />
          </button>
          <h5 className="font-light tracking-widest text-sm">
            Foods{" "}
            <span className=" font-bold">
              {kategory ? `> ${kategory}` : ""}
            </span>
          </h5>
        </div>
      </div>
      <div className="px-5 font-bold mt-5">
        <h1>{kategory ? kategory : "Foods"}</h1>
        <button onClick={() => setKategory("burgers")}>
          <Card price="" title="burger" image="" />
        </button>
      </div>
    </div>
  );
}
