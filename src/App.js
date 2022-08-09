import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Pages from "./Pages";
import "./cors.json";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import VerifyUser from "./components/account/VerifyUser";
import EmailFormModal from "./components/modals/EmailFormModal";
import NameFormModal from "./components/modals/NameFormModal";
import SearchModal from "./components/search/SearchModal";
import CartModal from "./components/modals/cart/CartModal";
import InfoModal from "./components/modals/InfoModal";
import React from "react";
import SignIn from "./components/account/SignIn/SignIn";
import SignUp from "./components/account/signUp/SignUp";

function App() {
  const [isSearch, setIsSearch] = useState(false);
  const location = useLocation();

  // on route change, move to the top of the page
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <>
      <Navbar isSearch={isSearch} setIsSearch={setIsSearch} />
      <SignIn />
      <SignUp />
      <InfoModal />
      <EmailFormModal />
      <NameFormModal />
      <VerifyUser />
      <SearchModal />
      <CartModal />
      <Pages />
      <Footer />
    </>
  );
}

export default App;
