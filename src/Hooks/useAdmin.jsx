import { useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const email = user?.email;
  fetch(`http://localhost:5000/users/${email}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.admin) setAdmin(data.admin);
    });
  return [admin];
};

export default useAdmin;