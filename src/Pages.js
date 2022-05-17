import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Admin from "./pages/admin/Admin";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/product/Product";
import NotFound from "./pages/notFound/NotFound";
import Upload from "./pages/admin/upload/Upload";
import Manage from "./pages/admin/manage/Manage";
import UploadComputers from "./pages/admin/upload/UploadComputers";
import UploadEmployees from "./pages/admin/upload/UploadEmployees";
import UploadAccessories from "./pages/admin/upload/UploadAccessories";
import Computers from "./pages/products/Computers";
import Accessories from "./pages/products/Accessories";
import ManageAccessory from "./pages/admin/manage/ManageAccessory";
import ManageComputer from "./pages/admin/manage/ManageComputer";
import ManageEmployee from "./pages/admin/manage/ManageEmployee";
import About from "./pages/about/About.js";
import Contact from "./pages/contact/Contact.js";
import Services from "./pages/services/Services";
import Account from "./pages/account/Account";
import ProtectRoute from "./components/ProtectRoute";
import ProtectAdmin from "./components/ProtectAdmin";
import Payment from "./components/payment/Payment";
import React from "react";
import Team from "./components/team/Team";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path={"/:productName/:productID"} element={<Product />} />
        <Route element={<ProtectRoute />}>
          <Route path="/my-account" element={<Account />} />
          <Route path="/payment" element={<Payment />} />
        </Route>
        <Route element={<ProtectAdmin />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="manage" element={<Manage />}>
              <Route path="employees" element={<ManageEmployee />} />
              <Route path="accessories" element={<ManageAccessory />} />
              <Route path="computers" element={<ManageComputer />} />
            </Route>
            <Route path="upload" element={<Upload />}>
              <Route path="computers" element={<UploadComputers />} />
              <Route path="employees" element={<UploadEmployees />} />
              <Route path="accessories" element={<UploadAccessories />} />
            </Route>
          </Route>
        </Route>

        <Route index path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="computers" element={<Computers />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="computers" element={<Computers />} />
        <Route path="/team" element={<Team />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Pages;
