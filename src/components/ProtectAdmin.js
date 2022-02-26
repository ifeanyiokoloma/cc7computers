import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectAdmin = () => {
  const location = useLocation();

  const { loading, signIn, user } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (
    signIn &&
    (user.uid === "P7DQ5Ki2OBg1oQMQ0rR7DyEAM3G2" ||
      "bdp9PtF7LMhdFxDrkAGi2KwRSPS2")
  ) {
    return <Outlet />;
  } else if (!signIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return <h1>Sorry, you can't access this page</h1>;
  }
};

export default ProtectAdmin;
