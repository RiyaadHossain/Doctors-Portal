import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card max-w-96 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img className="pt-3" src={service.img} alt="Shoes" />
      </figure>
      <div className="card-body text-black">
        <h2 className="card-title">{service.name}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Service;
