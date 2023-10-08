"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSpoon } from "react-icons/fa6";
import { TbGrillFork } from "react-icons/tb";
import server from "@/helpers/axiosConnect";

interface props {
  setShow: any;
  action: any;
  post: string;
}

export default function Form({ setShow, action, post }: props) {
  const animate = {
    open: {
      width: ["0%", "100%", "100%"],
      height: ["0", "0rem", "20rem"],
      opacity: [0.5, 1, 1],
    },
    close: { width: "7.3%", height: "0", opacity: 0 },
  };

  const [image, setImage]: any = useState(null);
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = async () => {
    const formData = new FormData();

    formData.append("image", image[0]);
    formData.append("name", title);
    formData.append("price", price);

    await server.post(post, formData);

    setShow(false);
    action();
  };

  return (
    <motion.div
      className="absolute bg-yellow-300  top-0 rounded-md p-5 overflow-hidden"
      initial={{ width: 0, height: 0, opacity: 0 }}
      variants={animate}
      animate="open"
      exit="close"
      transition={{ duration: 1, ease: "circInOut" }}
    >
      <button
        onClick={() => setShow(false)}
        className="flex justify-center items-center group"
      >
        <FaSpoon
          size="1.2rem"
          className="translate-x-2 -rotate-45 origin-bottom-left transition  group-hover:rotate-0 -translate-y-1"
        />
        <TbGrillFork
          size="1.4rem"
          className="-translate-x-4 rotate-45 origin-bottom-right transition group-hover:rotate-0 -translate-y-1"
        />
      </button>
      <div className="flex gap-36">
        <div className="flex flex-col">
          <input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="name..."
            className="px-2 py-3 rounded-md outline-none font-medium w-[20rem] mt-3"
          />
          <input
            placeholder="price..."
            onChange={(e) => setPrice(e.target.value)}
            className="px-2 py-3 rounded-md outline-none font-medium w-[20rem] mt-3"
          />
          <label htmlFor="image">
            <div className="px-2 py-3 rounded-md outline-none font-medium w-[20rem] mt-3 bg-white cursor-pointer">
              Select Image
            </div>
            <input
              type="file"
              hidden
              id="image"
              accept="image/*"
              onChange={(e) => {
                const image: any = e.target.files;
                const preview = URL.createObjectURL(image[0]);
                setPreview(preview);
                setImage(image);
              }}
            />
          </label>
          <button
            onClick={() => onSubmit()}
            className="border border-white px-2 py-3 w-[8rem] rounded-md mt-3 text-white hover:bg-white hover:text-yellow-300"
          >
            Submit
          </button>
        </div>
        {preview && (
          <img src={preview} alt="preview" className=" aspect-square w-56" />
        )}
      </div>
    </motion.div>
  );
}
