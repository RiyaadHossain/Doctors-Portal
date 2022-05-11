import React from "react";

const Service = ({ service, setTreatment }) => {
  const { slots } = service;
  return (
    <div>
      <div class="card w-96 mx-auto bg-base-100 shadow-xl">
        <div class="card-body items-center text-black">
          <h2 class="card-title text-center text-2xl text-secondary">
            {service.name}
          </h2>
          <p className="uppercase text-sm">
            {slots.length ? (
              slots[0]
            ) : (
              <span className="text-red-400">Try Another Day</span>
            )}
          </p>
          <p className="uppercase text-sm">
            {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
          </p>
          <div class="card-actions justify-center">
            <label onClick={() => setTreatment(service)} for="booking-modal" class="btn modal-button btn-primary">
             Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
