import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Chair from "../../../Assets/Images/chair.png";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="hero banner_hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Chair} className="rounded-lg w-1/2 mx-auto shadow-2xl" alt="" />
        <div className="text-black mx-auto w-1/2 p-5 bg-slate-50">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <p>You Have Picked <span className="text-primary">{format(date, 'PP')}</span>.</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
