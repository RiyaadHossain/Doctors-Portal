import React from "react";
import auth from "../../../Firebase/Firebase.init";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";

const LogIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth)
  console.log(user);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 py-6 px-4 bg-base-100 shadow-xl">
        <h2 className="font-bold text-xl text-center text-primary">Log In</h2>
        <div className="card-body"></div>
        <div className="divider text-black">OR</div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn border-black text-black btn-outline"
        >
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default LogIn;
