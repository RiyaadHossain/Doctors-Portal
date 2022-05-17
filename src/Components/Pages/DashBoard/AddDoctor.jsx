import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Spinner from "../Shared/Spinner/Spinner";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("service", () =>
    fetch("https://enigmatic-retreat-83297.herokuapp.com/appointments").then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Spinner />;
  }

  const imgUploadKey = "b20e07a3b33d3ccbb413087c3d9d148d";

  const onSubmit = async (data) => {
    const img = data.img[0];
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imgUploadKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((json) => {
        const doctor = {
          imgURL: json.data.url,
          name: data.text,
          email: data.email,
          speacility: data.speacility,
        };
        console.log(doctor);

        // Post Doctors Data to Server
        fetch("http://localhost:5000/adddoctor", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(doctor),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.insertedId) {
              toast.success("Doctor added Successfully");
            } else {
              toast.error("Failed to add Doctor");
            }
            reset();
          });
      });
  };
  return (
    <div>
      <h1 className="text-center text-2xl text-secondary pt-12 font-semibold">
        Add a New Doctor 👨🏻‍⚕️
      </h1>
      <form
        className="bg-gray-200 py-8 w-96 mx-auto mt-4 rounded"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Name Field */}
        <div className="form-control mx-auto w-full max-w-xs">
          <label className="label">
            <span className="label-text text-black">Name</span>
          </label>

          <input
            type="text"
            placeholder="Your Name"
            className="input text-black border-black input-bordered w-full max-w-xs"
            {...register("text", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.text?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.text?.message}
              </span>
            )}
          </label>
        </div>

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

        {/* Speacility Field */}
        <div className="form-control mx-auto w-full max-w-xs">
          <label className="label">
            <span className="label-text text-black">Speacility</span>
          </label>
          <select
            {...register("speacility")}
            class="select text-black border-black w-full max-w-xs"
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>

          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>

        {/* Image Field */}
        <div className="form-control mx-auto w-full max-w-xs">
          <label className="label">
            <span className="label-text text-black">Image</span>
          </label>

          <input
            type="file"
            className="input text-black border-black input-bordered w-full"
            {...register("img", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.img?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.img?.message}
              </span>
            )}
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <input
            className="btn mx-auto w-full bg-slate-600 text-gray-100 hover:text-white border-slate-600 max-w-xs"
            type="submit"
            value="Add Doctor"
          />
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
