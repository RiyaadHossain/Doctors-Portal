import React from "react";
import Service from "./Service";
import Fluoride from "../../../../Assets/Images/fluoride.png"
import Cavity from "../../../../Assets/Images/cavity.png"
import Teeth from "../../../../Assets/Images/whitening.png"

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: Fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: Cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: Teeth,
    }
  ];
  return (
    <div className="my-20">
      <div className="text-center">
        <h2 className="font-bold text-primary mb-2 text-xl">OUR SERVICES</h2>
        <p className="text-3xl text-black">Services We Provide</p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
