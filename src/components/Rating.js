import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function starRating(rate) {
  const rating = new Array(5).fill(0).fill(1, 0, rate);

  if (!Number.isInteger(rate) && rate <= 5) {
    rating[parseInt(rate)] = 0.5;
  }
  return rating;
}

const Rating = ({ rate }) => {
  const rating = starRating(rate);
  const renderedRatings = rating.map((rate, index) => {
    let rateIcon;

    switch (rate) {
      case 0.5:
        rateIcon = <BsStarHalf className="text-sunGlow" />;
        break;
      case 1:
        rateIcon = <BsStarFill className="text-sunGlow" />;
        break;
      default:
        rateIcon = <BsStar className="text-sunGlow" />;
    }

    return <React.Fragment key={index}>{rateIcon}</React.Fragment>;
  });
  return <div className="flex gap-x-1 items-center">{renderedRatings}</div>;
};

export default Rating;
