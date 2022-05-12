import React from "react";
import auth from "../../../Firebase/Firebase.init";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Spinner from "../Shared/Spinner/Spinner";

const LogIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let signInError;

  if (error || gError) {
    signInError = (
      <p className="text-red-600 ml-4 mb-2 text-sm">
        {error?.message || gError?.message}
      </p>
    );
  }

  if (loading || gLoading) {
    return <Spinner />;
  }

  if (user || gUser) {
    console.log(user || gUser);
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
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
            />
          </div>
        </form>

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
