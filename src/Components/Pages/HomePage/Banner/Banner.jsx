import React from "react";
import Chair from "../../../../Assets/Images/chair.png";
import Button from "../../Shared/Button/Button";

const Banner = () => {
  return (
    <div className="banner_hero">
      <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={Chair}
          class="w-full lg:w-1/2 rounded-lg shadow-2xl"
          alt=""
        />
        <div className="lg:w-1/2">
          <h1 class="text-5xl text-black font-bold">Your New Smile Starts Here</h1>
          <p class="text-lg py-6 text-black">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;