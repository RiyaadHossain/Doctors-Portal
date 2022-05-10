import React from "react";
import quate from "../../../../Assets/Icons/quote.svg";
import Review from "./Review";
import People1 from "../../../../Assets/Images/people1.png"
import person2 from "../../../../Assets/Images/person2.jpg"
import person3 from "../../../../Assets/Images/person3.jpg"

const Testomonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Winson Herry",
      img: People1,
      location: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 1,
      name: "Winson Herry",
      img: person2,
      location: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 1,
      name: "Winson Herry",
      img: person3,
      location: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    }
  ];
  return (
    <div className="my-16 container mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-bold text-primary">Testimonial</h1>
          <p className="text-4xl text-black">What Our Patients Says</p>
        </div>
        <img className="w-24 lg:w-48" src={quate} alt="" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {reviews.map(review => <Review key={review.id} review={review}/>)}
      </div>
    </div>
  );
};

export default Testomonial;
