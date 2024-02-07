import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./styles.css";

export default function StarRating({ noOfStars }) {
  const [currentStar, setCurrentStar] = useState(0);
  const [dynamicStar, setdynamicStar] = useState(0);

  function handleClick(index) {
    setCurrentStar(index);
    setdynamicStar(index);
  }

  function handleMouseMove(index) {
    setdynamicStar(index);
  }

  function handleMouseLeave(index) {
    setdynamicStar(currentStar);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= dynamicStar ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
        );
      })}
    </div>
  );
}
