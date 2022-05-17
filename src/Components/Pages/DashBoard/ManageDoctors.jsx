import React from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner/Spinner";

const ManageDoctors = () => {
  const { data: doctors, isLoading } = useQuery("doctors", () =>
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
      <h1>Hello Doctors: {doctors?.length}</h1>
    </div>
  );
};

export default ManageDoctors;
