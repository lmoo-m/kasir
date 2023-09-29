import React from "react";

interface props {
  image: any;
  title: string;
  price: string;
}

export default function Card({ image, title, price }: props) {
  return (
    <div className="mt-5 flex flex-wrap gap-10 overflow-y-scroll h-[30rem] pb-5 ">
      <div className="bg-white shadow-md  flex justify-center items-center flex-col p-5 rounded-xl w-44 h-52 gap-5">
        {image}
        <h1>{title}</h1>
        <p className=" text-yellow-500">{price}</p>
      </div>
    </div>
  );
}
