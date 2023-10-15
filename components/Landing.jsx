import React from "react";
import Image from "next/image";

const Landing = () => {
  return (
    <section className="bg-mainBackground flex relative justify-center flex-col bg-center w-full h-screen pt-20">
      <h1 className="text-center md:text-[4rem] sm:text-[3rem] text-white text-[2.5rem] font-bold">
        WE{" "}
        <span className="bg-gradientBackground bg-center bg-cover text-transparent bg-clip-text">
          OPTIMIZE ADS
        </span>{" "}
        FOR <br /> MORE CUSTOMER
      </h1>
      <h3 className="text-white md:text-[1.3rem] text-[1rem] text-center">
        Only Performance marketing Agency With Guaranteed Results
      </h3>
      <a href="#contact" className="bg-gradientBackground text-white font-bold px-10 py-4 max-w-[300px] rounded-full text-center mx-auto mt-10 z-10">
        Get My Free Proposal &gt;&gt;
      </a>
      <Image
        src={"/wave(3).svg"}
        width={10}
        className="w-full  absolute md:-bottom-10 bottom-0"
        height={50}
      />
    </section>
  );
};

export default Landing;
