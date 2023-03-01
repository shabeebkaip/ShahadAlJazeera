import React from "react";
import "../styles/Home.module.css";
import logo from "../assets/logo.png";
import Image from "next/image";

const index = () => {
  return (
    <div className="background h-screen">
      <div className="flex items-center flex-col justify-center">
        <Image src={logo} alt="jazeera" />
        <h1 className="text-yellow-500 font-bold uppercase fo">Hot Drinks</h1>
      </div>
      <div className="flex flex-col-2 gap-3"></div>
    </div>
  );
};

export default index;
