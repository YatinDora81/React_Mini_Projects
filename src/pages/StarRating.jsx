import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { IoStarSharp } from "react-icons/io5";

const StarRating = () => {
  const [stars, setStars] = useState(6);
  const [starRating, setStarRating] = useState(-1);
  const [hoverRating, setHoverRating] = useState(-1);

  const starRatingHandler = (ind) => {
    setStarRating(ind);
  };

  const hoverRatingHandler = (ind) => {
    setHoverRating(ind);
  };

  return (
    <div className=" bg-zinc-950 w-full h-screen flex justify-center flex-col gap-4 items-center">
      <div className=" flex justify-center items-center ">
        {new Array(stars).fill(".").map((e, i) => (
          <div
            key={i}
            onClick={() => starRatingHandler(i)}
            onMouseEnter={() => hoverRatingHandler(i)}
            onMouseLeave={() => hoverRatingHandler(-1)}
            className={`text-3xl ${
              (starRating >= i && hoverRating === -1) || hoverRating >= i
                ? "   text-yellow-300"
                : " text-white "
            } `}
          >
            <IoStarSharp></IoStarSharp>
          </div>
        ))}
      </div>
        <button onClick={()=>starRatingHandler(-1)} className=" bg-blue-50 text-red-600 text-xl px-2 py-1 rounded-lg hover:opacity-85 transition-all duration-100">Remove Rating</button>
      <div className=" text-xl text-white">Rating : {starRating+1} stars</div>
    </div>
  );
};

export default StarRating;
