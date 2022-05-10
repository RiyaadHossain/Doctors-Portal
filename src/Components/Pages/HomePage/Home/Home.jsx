import React from "react";
import Banner from "../Banner/Banner";
import Doctor from "../Others/Doctor";
import Hero from "../Others/Hero";
import HomeContact from "../Others/HomeContact";
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
        <HomeContact/>
    </div>
  );
};

export default Home;
