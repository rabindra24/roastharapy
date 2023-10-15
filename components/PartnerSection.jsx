import React from "react";
import CompanySlider from "./CompanySlider";
import InfinityScroll from "./InfinityScroll";
const PartnerSection = () => {
  return (
    <div className="w-full relative">
      <div className="w-full flex md:flex-row flex-col mt-5 md:px-10 px-4 ">
        <h3 className="md:w-[200px] text-gray-800  w-full md:text-left text-center font-bold text-[1.5rem] md:mb-0 mb-10">
          Featured in
        </h3>
        <InfinityScroll />
      </div>

    </div>
  );
};

export default PartnerSection;
