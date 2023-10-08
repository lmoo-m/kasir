"use client";

import { BsArrowLeft } from "react-icons/bs";
import React, { useState } from "react";

import Dashboard from "@/components/Dashboard";

export default function page() {
  const [navigate, setNavigate] = useState("");

  return (
    <div>
      <div className="px-2">
        <div className="flex items-center gap-2">
          <button
            className=" bg-slate-200 rounded-lg py-1 px-3 scale-95"
            onClick={() => setNavigate("")}
          >
            <BsArrowLeft />
          </button>
          <h5 className="tracking-widest text-sm">
            <span className={`${navigate ? "font-light" : "font-bold"}`}>
              Dashboard{" "}
            </span>
            <span className=" font-bold">
              {navigate ? `> ${navigate}` : ""}
            </span>
          </h5>
        </div>
      </div>
      <div className="px-5 font-bold mt-5 ">
        <h1>{navigate ? navigate : "Dashboard"}</h1>
        <div className="flex gap-4 mt-5">
          <Dashboard navigate={navigate} setNavigate={setNavigate} />
        </div>
      </div>
    </div>
  );
}
