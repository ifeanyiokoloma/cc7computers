import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import styles from "./admin.module.css";
import React from "react";

const Admin = () => {
  const {user} = useAuth()
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome, {user.displayName}</h1>
        <nav className={styles.nav}>
          <NavLink
            className={({ isActive }) => (isActive && styles.active)}
            to="/admin/upload"
          >
            Upload Files
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive && styles.active)}
            to="/admin/manage"
          >
            Manage Files
          </NavLink>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </main>
  );
};

export default Admin;
