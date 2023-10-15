"use client";
import React from "react";
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ClientSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 2,
    slidesToShow: 4,
    autoplay: true,
    speed: 6000,
    arrows: false,
    // autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const data = [
    {
      id: 1,
      img: "/facebook.png",
      title: "Facebook and Instagram Ads",
      slug: "E-com",
    },
    { id: 2, img: "/google.png", title: "Google & Youtube Ads", slug: "E-com" },
    {
      id: 3,
      img: "/linkbuilding.png",
      title: "Influencer Marketing",
      slug: "E-com",
    },
    {
      id: 4,
      img: "/canva.png",
      title: "Creative and Poster Design",
      slug: "E-com",
    },
    {
      id: 5,
      img: "/network.png",
      title: "Web Development & Landing Page",
      slug: "E-com",
    },
    { id: 6, img: "/social.png", title: "Video Editing", slug: "E-com" },
    { id: 7, img: "/marketing.png", title: "Press Release", slug: "E-com" },
    {
      id: 8,
      img: "/message.png",
      title: "Social Media Management",
      slug: "E-com",
    },
    {
      id: 9,
      img: "/contact.webp",
      title: "Business Growth Consultation",
      slug: "E-com",
    },
  ];

  return (
    <div className="w-full relative">
      <Image
        src={"/wave9.svg"}
        width={10}
        className="w-full  absolute top-0 z-50 "
        height={50}
        alt="These is a Image"
      />
      <div className="  w-full overflow-hidden bg-mainBackground  bg-cover bg-center  py-20 md:px-10 ">
        <h2 className="text-center font-extrabold text-[3rem] mb-10 text-white">
          Our Clients
        </h2>
        <Slider {...settings} className="">
          {data.map((item) => (
            <div key={item.id} className="md:mx-4 p-2 ">
              <div className="clientGradient p-4 h-[300px] rounded-2xl flex justify-center items-center flex-col relative">
                <Image
                  src={item.img}
                  width={100}
                  height={60}
                  className="mx-auto"
                  alt="These is a Image"

                />
                <h4 className="text-white text-center font-bold my-2 text-[1.6rem]">
                  {item.title}
                </h4>
                <p className="bg-white absolute bottom-0 min-w-[200px] text-center p-3 rounded-t-full">
                  {item.slug}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientSection;
