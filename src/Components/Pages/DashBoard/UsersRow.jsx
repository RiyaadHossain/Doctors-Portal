import React from "react";
import { toast } from "react-toastify";

const UsersRow = ({ user, i, refetch }) => {
  const makeAdmin = () => {
    fetch(`https://enigmatic-retreat-83297.herokuapp.com/users/admin/${user.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if(res.status === 401){
          toast.error("You aren't an Admin")
        }
        return res.json()
      })
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("User is Admin Now");
          refetch();
        }
      });
  };
  return (
    <tr>
      <th className="text-gray-700">{i + 1}</th>
      <td className="text-gray-700">{user.email}</td>
      <td className="text-gray-700">
        {user.role !== "admin" ? (
          <button
            onClick={makeAdmin}
            className="btn text-white bg-success border-white btn-xs"
          >
            Make Admin
          </button>
        ) : (
          <p className="text-secondary">Already Admin</p>
        )}
      </td>
      <td className="text-gray-700">
        <button className="btn text-white bg-error border-white btn-xs">
          Remove
        </button>
      </td>
    </tr>
  );
};

export default UsersRow;
