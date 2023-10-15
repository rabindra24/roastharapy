import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between md:px-10 w-full bg-white bg-opacity-30 fixed backdrop-blur-sm px-2 py-4 z-[1000] top-0 left-0">
      <Image src={"/logo.png"} width={150} height={50} alt="These is a Image" />
      <button className="bg-yellow-500 font-bold text-gray-800 w-[150px] h-auto rounded-md">
        Contact Us
      </button>
    </div>
  );
};

export default Navbar;
