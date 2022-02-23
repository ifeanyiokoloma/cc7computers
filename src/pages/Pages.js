import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import Admin from "../pages/admin/Admin";
import { Routes, Route } from "react-router-dom";
import Product from "../pages/product/Product";
import NotFound from "../pages/notFound/NotFound";
import Upload from "../pages/admin/upload/Upload";
import Manage from "../pages/admin/manage/Manage";
import UploadComputers from "../pages/admin/upload/UploadComputers";
import UploadEmployees from "../pages/admin/upload/UploadEmployees";
import UploadAccessories from "../pages/admin/upload/UploadAccessories";
import Computers from "../pages/products/Computers";
import Accessories from "../pages/products/Accessories";
import VerifyUser from "../components/login/VerifyUser";
import ManageAccessory from "./admin/manage/ManageAccessory";
import ManageComputer from "./admin/manage/ManageComputer";
import ManageEmployee from "./admin/manage/ManageEmployee";
import useFetchLive from "../hooks/useFetchLive";
import About from "./about/About.js";
import Contact from "./contact/Contact.js";
import Services from "./services/Services";
import Employees from "./about/Employees";
import Employee from "./employee/Employee";
import Account from "../components/account/Account";
import ProtectRoute from "../components/ProtectRoute";
import ProtectAdmin from "../components/ProtectAdmin";

const Pages = () => {
  const [products] = useFetchLive("products", []);
  const [employees] = useFetchLive("employees", []);
  return (
    <>
      <Routes>
        <Route element={<ProtectRoute />}>
          {products.map((product) => {
            return (
              <Route
                key={product.id}
                product={product}
                path={`/${product.type}/${product.id}`}
                caseSensitive={true}
                element={<Product product={product} />}
              />
            );
          })}
          <Route
            path="/my-account"
            caseSensitive={true}
            element={<Account />}
          />
        </Route>
        <Route element={<ProtectAdmin />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="manage" caseSensitive={true} element={<Manage />}>
              <Route
                path="employees"
                caseSensitive={true}
                element={<ManageEmployee />}
              />
              <Route
                path="accessories"
                caseSensitive={true}
                element={<ManageAccessory />}
              />
              <Route
                path="computers"
                caseSensitive={true}
                element={<ManageComputer />}
              />
            </Route>
            <Route path="upload" caseSensitive={true} element={<Upload />}>
              <Route
                path="computers"
                caseSensitive={true}
                element={<UploadComputers />}
              />
              <Route
                path="employees"
                caseSensitive={true}
                element={<UploadEmployees />}
              />
              <Route
                path="accessories"
                caseSensitive={true}
                element={<UploadAccessories />}
              />
            </Route>
          </Route>
        </Route>

        <Route path="/login" element={<VerifyUser />} />

        <Route index path="/" caseSensitive={true} element={<Home />} />
        <Route path="/shop" caseSensitive={true} element={<Shop />} />
        <Route path="/about" caseSensitive={true} element={<About />} />
        <Route path="/contact" caseSensitive={true} element={<Contact />} />
        <Route path="/services" caseSensitive={true} element={<Services />} />
        <Route path="computers" caseSensitive={true} element={<Computers />} />
        <Route
          path="accessories"
          caseSensitive={true}
          element={<Accessories />}
        />
        <Route path="computers" caseSensitive={true} element={<Computers />} />
        <Route path="/employees" caseSensitive={true} element={<Employees />} />

        {employees.map((employee) => {
          return (
            <Route
              key={employee.id}
              employee={employee}
              path={`/${employee.type}/${employee.id}`}
              caseSensitive={true}
              element={<Employee employee={employee} />}
            />
          );
        })}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Pages;
