import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner/Spinner";
import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";

// Get Publishable Key
const stripePromise = loadStripe("pk_test_51L1q4EFo6wW3RMmq45vPBnTtJg0BO7D83Qc4jb7Uvl24rTISs5vuUp61FUfMapAqK0NwQD3ELA4sb5y7OacpetZN00ajNdIyM2");

const Payment = () => {
  const { id } = useParams();
  const { data: payment, isLoading } = useQuery(["booking", id], () =>
    fetch(`http://localhost:5000/booking/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) return <Spinner />;
  const { treatmentName, treatmentDate, price, patient, slot } = payment;
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col">
        <div class="">
          <h1 class="text-3xl font-bold text-black text-center">
            Payment for <span className="text-secondary"> {treatmentName}</span>
          </h1>
          <p class="py-6 font-lg text-gray-900">
            Hello, <span className="text-primary font-bold">{patient}</span>
            <br />
            You have to pay <span className="text-primary">
              $ {price}
            </span> for <span className="text-primary">{treatmentName}</span>.{" "}
            <br />
            We'll look forward to seing you on{" "}
            <span className="text-sky-500">{treatmentDate}</span> at{" "}
            <span className="text-sky-500">{slot}</span>
          </p>
        </div>
        <div class="card w-full  shadow-2xl bg-base-100">
          <div class="card-body">

            {/* Wrap Your 'Checkout Components' with build-in 'Elements' from 'Stripe' */}
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
