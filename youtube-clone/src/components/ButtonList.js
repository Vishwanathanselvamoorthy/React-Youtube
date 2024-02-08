import React from "react";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const ButtonList = () => {
  const btnList = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "India national Cricket",
    "Cooking",
    "Valentine",
    "HTML",
    "News",
    "Film Criticisms",
    "Gadgets",
    "Stocks",
    "Recently Uploaded",
    "Watched",
    "Tamil Cinema",
    "Test Cricket",
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "India national Cricket team",
    "Cooking",
    "Valentine",
    "HTML",
    "News",
    "Film Criticisms",
    "Gadgets",
    "Stocks",
    "Recently Uploaded",
    "Watched",
    "Tamil Cinema",
    "Test Cricket",
  ];
  return (
    <div className="flex  w-full">
      <Swiper
        // spaceBetween={100}
        slidesPerView={4}
        
      >
        {btnList.map((btn) => (
          <SwiperSlide>
            <Button btnName={btn} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ButtonList;
