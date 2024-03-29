import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";
import { useQuery } from 'react-query'
import Spinner from "../Shared/Spinner/Spinner";

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null)
    const formattedDate = date && format(date, "PP")

    const { isLoading, data, refetch } = useQuery(['availables', {formattedDate}], () =>
     fetch(`https://enigmatic-retreat-83297.herokuapp.com/availables?date=${formattedDate}`).then(res =>
       res.json()
     )
   )
 
   if (isLoading) return <Spinner/>

  return (
    <div className="text-center py-20 container mx-auto">
      <h2 className="text-2xl mb-10 text-primary">
        You Have Picked {date && format(date, "PP")}.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map(appointment => <Service key={appointment._id} service={appointment} setTreatment={setTreatment}/>)}
      </div>
      {treatment && <BookingModal refetch={refetch} date={date} setTreatment={setTreatment} treatment= {treatment}/>}
    </div>
  );
};

export default AvailableAppointments;
