import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectAdmin = () => {
  const location = useLocation();

  const { loading, signIn, signOut, user } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (
    signIn &&
    (user.uid === "P7DQ5Ki2OBg1oQMQ0rR7DyEAM3G2" ||
      "bdp9PtF7LMhdFxDrkAGi2KwRSPS2")
  ) {
    return <Outlet />;
  }

  if (signOut) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default ProtectAdmin;
