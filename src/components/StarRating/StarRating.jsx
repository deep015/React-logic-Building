import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);   // selected rating
  const [hover, setHover] = useState(0);     // temporary hover state

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 text-3xl cursor-pointer">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}            // set rating on click
            onMouseEnter={() => setHover(star)}        // show hover effect
            onMouseLeave={() => setHover(0)}           // reset hover
          >
            {star <= (hover || rating) ? "★" : "☆"}    
          </span>
        ))}
      </div>
      <p className="mt-3 text-lg font-medium">
        You rated this: {rating} / 5
      </p>
    </div>
  );
};

export default StarRating;
