import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Rating = () => {
  const ratings = Array(5).fill(0);
  const renderedRatings = ratings.map((rate, index) => {
    return (
      <React.Fragment key={index}>
        <BsStarFill className="text-sunGlow" />
      </React.Fragment>
    );
  });
  return <div className="flex gap-x-1 items-center">{renderedRatings}</div>;
};

export default Rating;
