import React, { useEffect } from "react";
import auth from "../../../Firebase/Firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Spinner from "../Shared/Spinner/Spinner";
import { toast } from "react-toastify";
import useToken from "../../../Hooks/useToken";

const LogIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    formState: { errors },
    handleSubmit, getValues
  } = useForm();
  const [token] = useToken(user || gUser);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let signInError;

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (error || gError || resetError) {
    signInError = (
      <p className="text-red-600 ml-4 mb-2 text-sm">
        {error?.message || gError?.message}
      </p>
    );
  }

  if (loading || gLoading || sending) {
    return <Spinner />;
  }

  const onSubmit = async(data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    toast.success("Logged In");
  };

  const handleReset = async() => {
    const email = getValues('email')
    await sendPasswordResetEmail(email)
    toast.success("Reset Email Sent")
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 py-6 px-4 bg-base-100 shadow-xl">
        <h2 className="font-bold text-xl text-center text-primary">Log In</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="form-control mx-auto w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">Email</span>
            </label>

            <input
              type="email"
              placeholder="Your Email"
              className="input text-black border-black input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  message: "Provide Valid Email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-600">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          {/* Password Field */}
          <div className="form-control mx-auto w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">Password</span>
            </label>

            <input
              type="password"
              placeholder="Password"
              className="input text-black border-black input-bordered w-full max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
                minLength: {
                  value: 5,
                  message: "Must be 6 Characters or longer",
                },
              })}
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-600">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>

          {signInError}

          {/* Submit Button */}
          <div className="text-center">
            <input
              className="btn mx-auto w-full bg-slate-600 text-gray-100 hover:text-white border-slate-600 max-w-xs"
              type="submit"
              value="Log In"
            />
          </div>
          <div className="mt-2 ml-4">
            <input
              onClick={handleReset}
              className="btn-link text-primary"
              type="button"
              value="Forget Password?"
            />
          </div>
        </form>
        <p className="text-center mt-3 text-sm">
          {" "}
          New to Doctors Portal{" "}
          <Link to="/signup" className="text-primary">
            {" "}
            Create an Account
          </Link>
        </p>
        <div className="divider text-black">OR</div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn hover:bg-slate-900 border-black text-black btn-outline"
        >
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default LogIn;
