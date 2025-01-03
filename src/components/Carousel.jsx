import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Carousel = ({ children }) => {
  const [curr, setCurr] = useState(0);

  const intRef = useRef(0);

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intRef.current);
    };
  }, []);

  const startInterval = () => {
    intRef.current = setInterval(() => {
      const len = [...children].length;
      setCurr((prev) => (prev + 1 === len ? 0 : prev + 1));
    }, 2000);
  };

  const endInterval = () => {
    clearInterval(intRef.current);
  };

  return (
    <div className=" relative h-full w-full">
      <div className="" >
        {[...children].map(
          (ele, ind) =>
            curr === ind && <div onMouseEnter={endInterval} onMouseLeave={startInterval} className=" w-[100vw] absolute "> {ele} </div>
        )}
      </div>

      <div className=" w-full h-full absolute top-[13rem]">
        <button
          onClick={() => {
            endInterval();
            setCurr((prev) =>
              prev === 0 ? [...children].length - 1 : prev - 1
            );
            startInterval();
          }}
          className=" text-2xl border p-2 rounded-lg hover:opacity-80 transition-all duration-100 absolute left-1 md:left-[7.5rem]"
        >
          <FaArrowLeftLong />
        </button>
      </div>
      <div className=" w-full h-full absolute top-[13rem]  ">
        <button
          onClick={() => {
            endInterval();
            setCurr((prev) =>
              prev + 1 === [...children].length ? 0 : prev + 1
            );
            startInterval();
          }}
          className=" text-2xl border p-2 rounded-lg hover:opacity-80 transition-all duration-100 absolute right-1  md:right-[7.5rem]"
        >
          <FaArrowRightLong />
        </button>
      </div>

      <div className=" w-full flex justify-center items-center absolute top-[63vh]  gap-1 cursor-pointer">
        {[...children].map((_, ind) => (
          <div
            onClick={() => {
              endInterval();
              setCurr(ind);
              startInterval();
            }}
            className={`h-1  w-10 rounded-2xl ${
              curr === ind
                ? "bg-white"
                : " bg-gray-500 hover:bg-gray-600 transition-all duration-100"
            } `}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
