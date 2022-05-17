import React from "react";

const DoctorsRow = ({ doctor, i, setDeleteDoctor }) => {
  const { imgURL, name, speacility} = doctor;

  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-24 mask mask-squircle">
            <img src={imgURL} alt={name} />
          </div>
        </div>
      </td>
      <td className="text-gray-900 font-semibold">{name}</td>
      <td className="text-gray-900">{speacility}</td>
      <td>
        <label
          onClick={() => setDeleteDoctor(doctor)}
          for="delete-doctor-modal"
          class="btn modal-button text-white bg-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorsRow;
