import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import SignInMessage from "./SignInMessage";

const ProtectAdmin = () => {
  const { loading, signIn } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (signIn) {
    return <Outlet />;
  }

  if (!signIn) {
    return <SignInMessage />;
  }
};

export default ProtectAdmin;
