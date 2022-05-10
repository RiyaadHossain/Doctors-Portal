import React from "react";
import DoctorImage from "../../../../Assets/Images/doctor.png";
import appointment from "../../../../Assets/Images/appointment.png";

const Doctor = () => {
  return (
    <section style={{
        background: `url(${appointment})`
    }} className="lg:flex px-8 py-14 lg:py-0 justify-center items-center">
      <div className="flex-1">
        <img className="hidden w-[650px] mx-auto mt-[-100px] lg:block" src={DoctorImage} alt="" />
      </div>
      <div className="flex-1 ">
        <h1 className="text-primary font-bold text-xl">Appointment</h1>
        <h3 className="text-4xl text-white my-4">Make an appointment Today</h3>
        <p className="text-lg lg:pr-16 text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
      </div>
    </section>
  );
};

export default Doctor;
