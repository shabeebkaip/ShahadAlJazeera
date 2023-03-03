import React, { useState } from "react";
import Image from "next/image";
import "../styles/Home.module.css";
import logo from "../assets/logo.png";

import img1 from "../assets/SAJ Hot Drink 001.jpg";
import img2 from "../assets/SAJ Hot Drink 007.jpg";
import img3 from "../assets/SAJ Hot Drink 005.jpg";
import img4 from "../assets/SAJ Hot Drink 006.jpg";

const data = [
  {
    id: 1,
    name: "Cafe Latte",
    price: "AED 25.00",
    img: img1,
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "AED 25.00",
    img: img2,
  },
  {
    id: 3,
    name: "Flat White",
    price: "AED 25.00",
    img: img3,
  },
  {
    id: 4,
    name: "Hot Pistachio Latte",
    price: "AED 25.00",
    img: img4,
  },

]

const Index = () => {
  return (
    <div className="h-full p-4 bg-customGray">
      <div className="flex flex-col items-center justify-center py-4 ">
        <Image src={logo} alt="jazeera" width={200} />
        <h1 className="font-bold text-center text-yellow-500 uppercase ">
          Hot Drinks
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 p-2">
        {data.map((item, index) => (
          <div className="flex flex-col items-center gap-3" key={index}>
            <Image
              src={item.img}
              alt={item.name}
              className="object-cover rounded shadow-2xl aspect-square"
            />
            <div className="font-semibold text-yellow-500 " align="center">
              <h2>{item.name}</h2>
              <p>{item.price}</p>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default Index;
