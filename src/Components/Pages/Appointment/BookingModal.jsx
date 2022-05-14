import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);

  // On Form Submit
  const submitForm = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(_id, name, slot);

    const formattedDate = format(date, "PP");

    const bookingData = {
      treatmentId: _id,
      treatmentName: name,
      treatmentDate: formattedDate,
      patientEmail: user.email,
      patient: user.displayName,
      phone: e.target.phone.value,
      slot,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Toast With Success Message
          toast.success(data.message);
          refetch()
        }
        else{
          toast.error(data.error)
        }

        // to Close the Modal
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn bg-primary text-white btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-center text-primary mb-6 text-2xl">
            {name}
          </h3>
          <form
            onSubmit={submitForm}
            className="grid grid-cols-1 gap-6 justify-items-center"
          >
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-primary text-black w-full max-w-xs"
            >
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Your Name"
              readOnly
              value={user?.displayName}
              className="input text-gray-900 input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="Email"
              readOnly
              value={user?.email}
              className="input text-gray-900 input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input text-gray-900 input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn text-white font-semibold btn-primary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
