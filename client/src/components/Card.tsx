import React from "react";
import {motion} from 'framer-motion'
import variable from "@/helpers/envVariables";
import { Alegreya } from "next/font/google";

interface props {
  image: any;
  title: string;
  price: string;
}

export default function Card({ image, title, price }: props) {
  if(image instanceof String){
    console.log('o')
    alert('p')
  }
  return (
    <motion.div layout initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="bg-white shadow-md  flex justify-center items-center flex-col p-5 rounded-xl w-44 h-52 gap-5">
        <img src={`${variable.hostName}/${image}`} alt={title} className=" aspect-square object-contain w-[6rem]" />
        <h1 className="capitalize">{title}</h1>
        <p className=" text-yellow-500 ">{price}</p>
      </div>
    </motion.div>
  );
}
