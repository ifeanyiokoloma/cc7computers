import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import styles from "./admin.module.css";
import React from "react";
import { StyledNavLink } from "../../components/navbar/StyledNavbar";

const Admin = () => {
  const { user } = useAuth();
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome, {user.displayName}</h1>

        <StyledNavLink to="/admin/upload">Upload Files</StyledNavLink>
        <StyledNavLink to="/admin/manage">Manage Files</StyledNavLink>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </main>
  );
};

export default Admin;
