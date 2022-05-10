import React from "react";
import Banner from "../Banner/Banner";
import Doctor from "../Others/Doctor";
import Hero from "../Others/Hero";
import Info from "../Others/Info";
import Services from "../Others/Services";
import Testomonial from "../Others/Testomonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <Info />
        <Services />
        <Hero />
      </div>
        <Doctor/>
        <Testomonial/>
    </div>
  );
};

export default Home;
