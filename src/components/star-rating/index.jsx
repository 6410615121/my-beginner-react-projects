import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./styles.css";

export default function StarRating({ noOfStars }) {
  const [currentStar, setCurrentStar] = useState(0);

  function handleClick(index) {
    setCurrentStar(index);
    console.log(currentStar);
  }

  function handleMouseMove(index) {}

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= currentStar ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
          />
        );
      })}
    </div>
  );
}
