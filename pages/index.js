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
    <div className="bg- h-screen p-4  ">
      <div className="flex items-center flex-col justify-center">
        <Image src={logo} alt="jazeera" />
        <h1 className="text-yellow-500 font-light uppercase font-sans">
          Hot Drinks
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-6    ">
        <div className="flex flex-col gap-2 items-center">
          <Image
            src={img1}
            alt="img1"
            className="w-80 h-80 object-cover shadow-lg"
          />
          <h2 className="text-yellow-500  font-semibold">Cappuccino</h2>
          <p>AED 25.00</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
        <Image
          src={img2}
          alt="img3"
          className="w-80 h-80 object-cover shadow-lg"
        />
        <h2 className="text-yellow-500  font-semibold">Cappuccino</h2>
        <p>AED 25.00</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6    ">
        <div className="flex flex-col gap-2 items-center">
          <Image
            src={img3}
            alt="img1"
            className="w-80 h-80 object-cover shadow-lg"
          />
          <h2 className="text-yellow-500  font-semibold">Cappuccino</h2>
          <p>AED 25.00</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
        <Image
          src={img4}
          alt="img3"
          className="w-80 h-80 object-cover shadow-lg"
        />
         <h2 className="text-yellow-500  font-semibold">Cappuccino</h2>
          <p>AED 25.00</p>
          </div>
      </div>
    </div>
  );
};

export default index;
