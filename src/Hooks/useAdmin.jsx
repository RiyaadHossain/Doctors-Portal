import { useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  const email = user?.email;
  fetch(`https://enigmatic-retreat-83297.herokuapp.com/users/${email}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.admin) {
        setAdmin(data.admin);
    }
    setAdminLoading(false);
    });
  return [admin, adminLoading];
};

export default useAdmin;
