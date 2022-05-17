import React, { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner/Spinner";
import DeleteDoctorModal from "./DeleteDoctorModal";
import DoctorsRow from "./DoctorsRow";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctors", {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h2 className="text-center text-4xl text-secondary font-bold mt-10">
        {" "}
        All Doctors Information
      </h2>
      <div class="mt-4 overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Speacility</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <DoctorsRow
                key={i}
                doctor={doctor}
                i={i}
                refetch={refetch}
                setDeleteDoctor={setDeleteDoctor}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && <DeleteDoctorModal refetch={refetch} deleteDoctor={deleteDoctor} setDeleteDoctor={setDeleteDoctor} />}
    </div>
  );
};

export default ManageDoctors;
