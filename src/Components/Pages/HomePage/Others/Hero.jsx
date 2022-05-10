import React from "react";
import Image from "../../../../Assets/Images/treatment.png"

const Hero = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={Image}
          class="max-w-sm rounded-lg shadow-2xl"
          alt="doctor"
        />
        <div className="pr-8 text-black">
          <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p class="py-6 text-lg">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <button class="btn bg-gradient-to-r text-white from-primary to-secondary btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
