import React from "react";
import { toast } from "react-toastify";

const UsersRow = ({ user, i, refetch }) => {
  const makeAdmin = () => {
    fetch(`http://localhost:5000/users/admin/${user.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success('User is Admin Now')
        refetch()
        console.log(data)});
     
  };
  return (
    <tr>
      <th className="text-gray-700">{i + 1}</th>
      <td className="text-gray-700">{user.email}</td>
      <td className="text-gray-700">
        {user.role !== 'admin' ? <button
          onClick={makeAdmin}
          className="btn text-gray-700 hover:text-gray-50 border-gray-700 btn-xs"
        >
          Make Admin
        </button> : <p className="text-secondary">Already Admin</p>}
      </td>
      <td className="text-gray-700">
        <button className="btn text-gray-700 hover:text-gray-50 border-gray-700 btn-xs">
          Remove
        </button>
      </td>
    </tr>
  );
};

export default UsersRow;
