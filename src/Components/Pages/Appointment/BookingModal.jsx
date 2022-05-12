import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment, date }) => {
    const {_id, name, slots} = treatment

    // On Form Submit
    const submitForm = e => {
        e.preventDefault()
        const slot = e.target.slot.value
        console.log(_id, name, slot);
        setTreatment(null)
    }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn bg-primary text-white btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-center text-primary mb-6 text-2xl">{name}</h3>
          <form onSubmit={submitForm} className="grid grid-cols-1 gap-6 justify-items-center">
          <input type="text" value={format(date, "PP")} disabled className="input input-bordered input-primary w-full max-w-xs" />
          <select name="slot" className="select select-primary text-black w-full max-w-xs">
            
            {
                slots.map(slot => <option value={slot}>{slot}</option>)
            }
          </select>
          <input type="text" placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs" />
          <input type="email" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" />
          <input type="text" placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs" />
          <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
