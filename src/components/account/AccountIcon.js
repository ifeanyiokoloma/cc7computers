import { MdAccountCircle } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import LoginBtn from "./LoginBtn";
import React from "react";
import { StyledNavLink } from "../navbar/StyledNavbar";

const AccountIcon = ({ className }) => {
  const { signIn } = useAuth();

  return (
    <>
      {signIn && (
        <StyledNavLink className={className} to="/my-account">
          <MdAccountCircle cursor="pointer" size="2.5rem" />
        </StyledNavLink>
      )}

      {!signIn && <LoginBtn />}
    </>
  );
};

export default AccountIcon;
