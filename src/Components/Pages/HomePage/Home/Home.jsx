import React from "react";
import Footer from "../../Shared/Footer/Footer";
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
        <Footer/>
    </div>
  );
};

export default Home;
