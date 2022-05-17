import React from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner/Spinner";
import UsersRow from "./UsersRow";

const Users = () => {
  const { data, isLoading, refetch } = useQuery("users", () =>
    fetch("https://enigmatic-retreat-83297.herokuapp.com/users", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) return <Spinner />;
  return (
    <div className="overflow-x-auto mr-6 mt-10">
      <h1 className="text-center text-3xl text-primary mb-3 font-bold">All Users</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>User Name</th>
            <th>Admin</th>
            <th>Remove </th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, i) => (
            <UsersRow key={i} refetch={refetch} user={user} i={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
