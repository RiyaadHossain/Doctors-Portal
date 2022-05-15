import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    console.log(currentUser);
    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [user]);

  return [token];
};

export default useToken;
