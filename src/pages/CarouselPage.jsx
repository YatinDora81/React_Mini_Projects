import React from "react";
import Carousel from "../components/Carousel";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

const initStyle = " h-[60vh] w-[80%] object-cover object-center mx-auto transition-all ease-in-out duration-100 rounded-2xl"

const CarouselPage = () => {
  return (
    <div className=" bg-zinc-950 min-h-screen text-white py-20 w-[100%] flex justify-center">
      <Carousel className=" w-full">
        
          <img
            className={initStyle}
            alt="carouselimg"
            loading="lazy"
            src={img5}
          ></img>
          <img
            className={initStyle}
            alt="carouselimg"
            loading="lazy"
            src={img6}
          ></img>
          <img
            className={initStyle}
            alt="carouselimg"
            loading="lazy"
            src={img1}
          ></img>
          <img
            className={initStyle}
            alt="carouselimg"
            loading="lazy"
            src={img2}
          ></img>
          <img
            className={initStyle}
            alt="carouselimg"
            loading="lazy"
            src={img3}
          ></img>
          <img
            className={initStyle}
            alt="carouselimg"
            loading="lazy"
            src={img4}
          ></img>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
