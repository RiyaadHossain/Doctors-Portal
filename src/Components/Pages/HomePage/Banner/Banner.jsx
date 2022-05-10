import React from "react";
import Chair from "../../../../Assets/Images/chair.png";

const Banner = () => {
  return (
    <div className="banner_hero">
      <div class="hero container mx-auto  min-h-screen">
        <div class="hero-contentflex-col lg:flex-row-reverse">
          <img
            src={Chair}
            className="mb-8 lg:mb-0 lg:w-1/2 rounded-lg shadow-2xl"
            alt="HeroImage"
          />
          <div className="lg:w-1/2">
            <h1 class="text-5xl text-black font-bold">
              Your New Smile Starts Here
            </h1>
            <p class="py-6 text-lg text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button class="btn bg-gradient-to-tr text-white hero_btn uppercase font-bold btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
