import React from "react";
import Image from "next/image";

const ServicesSection = () => {
  const data = [
    { id: 1, image: "/facebook.png", title: "Facebook and Instagram Ads" },
    { id: 2, image: "/google.png", title: "Google & Youtube Ads" },
    { id: 3, image: "/linkbuilding.png", title: "Influencer Marketing" },
    { id: 4, image: "/canva.png", title: "Creative and Poster Design" },
    { id: 5, image: "/network.png", title: "Web Development & Landing Page" },
    { id: 6, image: "/social.png", title: "Video Editing" },
    { id: 7, image: "/marketing.png", title: "Press Release" },
    { id: 8, image: "/message.png", title: "Social Media Management" },
    { id: 9, image: "/contact.webp", title: "Business Growth Consultation" },
  ];
  return (
    <div className="w-full relative">
      <Image
        src={"/wave9.svg"}
        width={10}
        className="w-full  absolute top-0 z-50 "
        height={50}
      />
      <div className="bg-mainBackground bg-cover bg-center w-full py-20  relative">
        <h1 className="font-bold text-center text-white md:text-[3rem] text-[1.8rem]">
          Our Performance Marketing Services
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10">
          {data.map((item) => (
            <div className="cardgradient rounded-full p-4 flex md:gap-5 gap-3 items-center">
              <span className="p-2 bg-gray-400 rounded-full imageBackGroundGradient">
                <Image src={item.image} width={40} height={40} />
              </span>
              <h5 className="text-white font-semibold text-[1.1rem]">
                {item.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
