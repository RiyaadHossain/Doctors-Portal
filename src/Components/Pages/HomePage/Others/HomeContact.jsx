import React from "react";
import contact from "../../../../Assets/Images/appointment.png";

const HomeContact = () => {
  const formSubmit = () => {
    console.log("Form Submitted");
  };
  return (
    <div style={{ background: `url(${contact})` }} className="py-16">
      <div className="text-center mb-5">
        <h1 className="text-primary text-xl font-bold">Contact Us</h1>
        <h3 className="text-white text-3xl">Stay Connected with Us</h3>
      </div>
      <div className="text-center mt-2">
        <form onSubmit={formSubmit}>
          <input
            className="block mx-auto w-[600px] px-5 py-3 mb-3"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="block mx-auto w-[600px] px-5 py-3 mb-3"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="block mx-auto resize-none w-[600px] px-5 py-3 mb-3"
            placeholder="Your Message"
            rows="7"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="btn bg-gradient-to-tr text-white hero_btn uppercase font-bold btn-primary"
          />
        </form>
      </div>
    </div>
  );
};

export default HomeContact;
