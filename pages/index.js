import React from "react";
import Image from "next/image";
import "../styles/Home.module.css";
import logo from "../assets/logo.png";

import img1 from "../assets/SAJ Hot Drink 001.jpg";
import img2 from "../assets/SAJ Hot Drink 007.jpg";
import img3 from "../assets/SAJ Hot Drink 005.jpg";
import img4 from "../assets/SAJ Hot Drink 006.jpg";

const index = () => {
  return (
    <div className="h-full p-4 bg-customGray">
    <div className="flex items-center justify-center flex-col py-4">
      <Image src={logo} alt="jazeera" />
      <h1 className="text-yellow-500 font-light uppercase font-sans text-center">
        Hot Drinks
      </h1>
    </div>
  
    <div className="grid grid-cols-2 gap-5">
      <div className="flex flex-col gap-2 items-center">
        <Image
          src={img1}
          alt="img1"
          className="object-cover shadow-2xl w-64 h-48 aspect-w-1 aspect-h-1"
        />
        <div className="text-yellow-500 font-semibold font-sans">
          <h2>Cafe Latte</h2>
          <p>AED 25.00</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Image
          src={img2}
          alt="img2"
          className="object-cover shadow-lg w-64 h-48 aspect-w-1 aspect-h-1"
        />
        <div className="text-yellow-500 font-semibold font-sans">
          <h2>Cappuccino</h2>
          <p className="flex justify-center">AED 25.00</p>
        </div>
      </div>
    </div>
  
    <div className="grid grid-cols-2 gap-5">
      <div className="flex flex-col gap-2 items-center">
        <Image
          src={img3}
          alt="img3"
          className="object-cover shadow-lg gap-2 w-64 h-48 aspect-w-1 aspect-h-1"
        />
        <div className="text-yellow-500 font-semibold font-sans">
          <h2>Flat White</h2>
          <p>AED 25.00</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Image
          src={img4}
          alt="img4"
          className="object-cover shadow-lg w-64 h-48 aspect-w-1 aspect-h-1"
        />
        <div className="text-yellow-500 font-semibold font-sans">
          <h2>Hot Pistachio Latte</h2>
          <p className="flex justify-center">AED 25.00</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default index;
