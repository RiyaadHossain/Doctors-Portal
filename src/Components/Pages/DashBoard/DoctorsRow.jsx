import React from "react";
import { toast } from "react-toastify";

const DoctorsRow = ({ doctor, i, refetch }) => {
  const { imgURL, name, speacility, email } = doctor;

  const handleDelete = (email) => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
          if(data.acknowledged){
              toast.success(`Doctor: ${name} Deleted Successfully`)
              refetch()
          }else{
              toast.error('Failed to Delete')
          }
      });
  };

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
        <button
          onClick={() => handleDelete(email)}
          className="btn btn-error text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DoctorsRow;
