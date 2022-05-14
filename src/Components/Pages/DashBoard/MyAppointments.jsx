import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";

const MyAppointments = () => {
  const [user] = useAuthState(auth);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/booking?patient=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user]);

  return (
    <div className="overflow-x-auto mr-6 mt-10">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Treatment</th>
            <th>Date</th>
            <th>Time </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, i) => (
            <tr key={booking._id}>
              <th>{i + 1}</th>
              <td>{booking.treatmentName}</td>
              <td>{booking.treatmentDate}</td>
              <td>{booking.slot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointments;
