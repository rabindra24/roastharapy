import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between md:px-10 w-full bg-white  fixed backdrop-blur-sm px-2 py-4 z-[1000] top-0 left-0">
      <Image src={"/logo.png"} width={150} height={50} alt="These is a Image" />
      <a href="#contact" className="buttonGradient font-bold text-white w-[140px] flex justify-center items-center h-auto rounded-md" >
        Contact Us
      </a>
    </div>
  );
};

export default Navbar;
