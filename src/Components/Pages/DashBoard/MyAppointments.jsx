import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";

const MyAppointments = () => {
  const [user] = useAuthState(auth);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://enigmatic-retreat-83297.herokuapp.com/booking?patient=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          navigate("/");
          localStorage.removeItem("accessToken");
        }
        return res.json();
      })
      .then((data) => setBookings(data));
  }, [user, navigate]);

  return (
    <div className="overflow-x-auto mr-6 mt-10">
      <h1 className="text-center mb-3 text-primary font-bold text-3xl">
        My Appointments
      </h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Treatment</th>
            <th>Date</th>
            <th>Time </th>
            <th>Payment </th>
          </tr>
        </thead>
        <tbody>
          {bookings?.map((booking, i) => (
            <tr className="bg-slate-700" key={booking._id}>
              <th className="text-gray-700">{i + 1}</th>
              <td className="text-gray-700">{booking.treatmentName}</td>
              <td className="text-gray-700">{booking.treatmentDate}</td>
              <td className="text-gray-700">{booking.slot}</td>
              <td className="text-gray-700">
               {(booking?.price && !booking.paid) && <Link to={`/booking/${booking._id}`} className="btn btn-xs btn-success">Pay</Link>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointments;
