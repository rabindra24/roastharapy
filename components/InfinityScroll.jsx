import React from "react";
import Image from "next/image";

const InfinityScroll = () => {
  const data = [
    { id: 2, img: "/yahoo.jpg" },
    { id: 3, img: "/image-3.png" },
    { id: 4, img: "/image-2.png" },
    { id: 5, img: "/image-4.png" },
    { id: 6, img: "/image-5.png" },
    { id: 7, img: "/image-6.png" },
  ];
  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
      class="w-full inline-flex flex-nowrap overflow-hidden "
    >
      <ul
        x-ref="logos"
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {data.map((item) => (
          <li key={item.id}>
            <Image src={item.img} alt="Facebook" width={100} height={30} />
          </li>
        ))}
      </ul>
      <ul
        x-ref="logos"
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {data.map((item) => (
          <li key={item.id}>
            <Image src={item.img} alt="Facebook" width={100} height={30} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfinityScroll;
