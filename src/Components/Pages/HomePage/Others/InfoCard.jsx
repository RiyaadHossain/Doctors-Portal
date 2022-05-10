import React from "react";

const InfoCard = ({img, gradient, header, text}) => {
  return (
    <div class={`card lg:card-side text-white bg-base-100 shadow-xl p-5 ${gradient ? 'bg-gradient-to-r from-secondary to-primary' : 'bg-accent'}`}>
      <figure>
        <img
          src={img}
          alt="Album"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{header}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
