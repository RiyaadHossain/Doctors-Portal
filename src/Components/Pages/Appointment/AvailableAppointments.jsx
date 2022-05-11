import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [])
  return (
    <div className="text-center py-20 container mx-auto">
      <h2 className="text-2xl mb-10 text-primary">
        You Have Picked {format(date, "PP")}.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.map(appointment => <Service key={appointment._id} service={appointment}/>)}
      </div>
    </div>
  );
};

export default AvailableAppointments;
