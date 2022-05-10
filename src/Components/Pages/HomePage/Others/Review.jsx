import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card max-w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <p className="text-black">{review.review}</p>

        <div class="flex items-center mt-2">
          <div class="avatar">
            <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 mr-3">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h2 class="card-title text-primary">{review.name}</h2>
            <p className="text-black">{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
