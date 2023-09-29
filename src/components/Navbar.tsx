"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";
import { BiSolidDrink } from "react-icons/bi";
import { RiBillFill } from "react-icons/ri";
import { usePathname } from "next/navigation";

const listNavigation = [
  {
    title: "Dashboard",
    url: "/",
    icon: <MdSpaceDashboard />,
  },
  {
    title: "Foods",
    url: "/foods",
    icon: <PiBowlFoodFill />,
  },
  {
    title: "Drinks",
    url: "/drinks",
    icon: <BiSolidDrink />,
  },
  {
    title: "Bills",
    url: "/bills",
    icon: <RiBillFill />,
  },
];
export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="border-r px-4 relative">
      <h1>LOGO</h1>
      <ul className="mt-6 -translate-x-3 flex flex-col gap-1">
        {listNavigation.map((navigation: any, i: number) => (
          <li
            key={i}
            className={`py-2 px-3 rounded-md hover:bg-yellow-300 w-[110%] ${
              navigation.url === pathName ? "bg-yellow-300" : ""
            }`}
          >
            <Link href={navigation.url} className="flex items-center gap-2">
              {navigation.icon} {navigation.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 right-0 w-[110%] flex justify-center items-center flex-col ">
        <div className="rounded-md w-[75%] h-32 bg-white shadow-xl mb-5 flex flex-col justify-end items-center py-2 border-t relative">
          <div className=" bg-blue-400 w-1/2 h-[50%] rounded-full -translate-y-5 absolute top-0"></div>
          <h1 className=" font-bold mb-2">Kasir 1</h1>
          <button className=" bg-gray-100 px-5 py-2 rounded-md text-sm font-semibold hover:bg-yellow-300">
            Open Profile
          </button>
        </div>
        <p className=" font-extralight">2023</p>
      </div>
    </div>
  );
}
