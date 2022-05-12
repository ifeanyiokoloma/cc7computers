import { payment } from "../../data/articles/articles";
import Hero from "../hero/Hero";
import { Outlet } from "react-router-dom";
import PaystackBtn from "./PaystackBtn";
import React from "react";

const Payment = () => {
  return (
    <div>
      <Hero
        page="payment"
        imgName="naira"
        pageData={payment}
        btn={<PaystackBtn />}
      />
      <Outlet />
    </div>
  );
};

export default Payment;
