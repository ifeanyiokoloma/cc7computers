import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Pages from "./Pages";
import "./cors.json";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchModal from "./components/search/SearchModal";
import CartModal from "./components/modals/cart/CartModal";
import React from "react";
import SignIn from "./components/account/SignIn/SignIn";
import SignUp from "./components/account/signUp/SignUp";
import ForgetPassword from "./components/account/SignIn/ForgetPassword";
import Response from "./components/Response/Response";
import MobileNav from "./components/navbar/MobileNav";

function App() {
  const location = useLocation();

  // on route change, move to the top of the page
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <>
      <Navbar />
      <MobileNav />
      <Response />
      <ForgetPassword />
      <SignIn />
      <SignUp />
      <SearchModal />
      <CartModal />
      <Pages />
      <Footer />
    </>
  );
}

export default App;
