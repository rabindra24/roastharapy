// "use client";
// import React from "react";
// import Slider from "react-slick";
// import "../node_modules/slick-carousel/slick/slick.css";
// import "../node_modules/slick-carousel/slick/slick-theme.css";
// import Image from "next/image";

// const CompanySlider = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToScroll: 2,
//     slidesToShow: 4,
//     autoplay: true,
//     speed: 3000,
//     autoplaySpeed: 3000,
//     cssEase: "linear",
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };

//   const data = [
//     { id: 2, img: "/yahoo.jpg" },
//     { id: 3, img: "/image-3.png" },
//     { id: 4, img: "/image-2.png" },
//     { id: 5, img: "/image-4.png" },
//     { id: 6, img: "/image-5.png" },
//     { id: 7, img: "/image-6.png" },
//   ];

//   return (
//     <div className="  w-full overflow-hidden ">
//       <Slider {...settings}>
//         {data.map((item, idx) => (
//           <div key={item.id} className=" ">
//             <Image
//               src={item.img}
//               width={100}
//               height={60}
//               className=""
//               alt="These is a Image"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CompanySlider;
