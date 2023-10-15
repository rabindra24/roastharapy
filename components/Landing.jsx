import React from "react";
import Image from "next/image";

const Landing = () => {
  return (
    <section className="bg-mainBackground flex relative justify-center flex-col bg-center w-full h-screen pt-20 px-5">
      <h1 className="text-center md:text-[4rem] sm:text-[3rem] text-white text-[2.5rem] font-bold">
        WE{" "}
        <span className="textGradient ">
          OPTIMIZE ADS
        </span>{" "}
        FOR <br /> MORE CUSTOMER
      </h1>
      <h2 className="text-white md:text-[1.3rem] text-[1rem] text-center">
        Only Performance marketing Agency With Guaranteed Results
      </h2>
      <a href="#contact" className="buttonGradient text-white font-bold px-10 py-4 max-w-[300px] rounded-full text-center mx-auto mt-10 z-10">
        Get My Free Proposal &gt;&gt;
      </a>
      <Image
        src={"/wave(3).svg"}
        width={10}
        className="w-full  absolute md:-bottom-10 bottom-0 left-0"
        height={50}
        alt="These is a Image"
      />
    </section>
  );
};

export default Landing;
