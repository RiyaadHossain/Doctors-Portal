import React from "react";
import { toast } from "react-toastify";

const DeleteDoctorModal = ({ deleteDoctor, refetch, setDeleteDoctor }) => {
  const { email, name } = deleteDoctor;
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
        if (data.acknowledged) {
          toast.success(`Doctor: ${name} Deleted Successfully`);
          refetch();
        } else {
          toast.error("Failed to Delete");
        }
        setDeleteDoctor(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-doctor-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-error text-lg">Are You Sure?</h3>
          <p class="py-4 text-gray-900">
            {`${name} Doctor will be Removed from You Application`}
          </p>
          <div class="modal-action">
            <button
              onClick={() => handleDelete(email)}
              className="btn btn-error text-white"
            >
              Confirm
            </button>
            <label for="delete-doctor-modal" class="btn btn-info">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDoctorModal;
