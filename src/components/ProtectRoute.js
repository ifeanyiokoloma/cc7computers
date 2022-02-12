import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectRoute = () => {
  const location = useLocation();

  const { loading, signIn, signOut } = useAuth();
  
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (signIn) {
    return <Outlet />;
  }

  if (signOut) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default ProtectRoute;
