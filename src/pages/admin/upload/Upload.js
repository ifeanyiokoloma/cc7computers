import { NavLink, Outlet } from 'react-router-dom'
import styles from "./upload.module.css";
import React from "react";

const Upload = () => {
    return (
      <div className={styles.container}>
        <nav className={styles.nav}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : null)}
            to="/admin/upload/computers"
          >
            Upload Computers
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : null)}
            to="/admin/upload/accessories"
          >
            Upload Accessories
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : null)}
            to="/admin/upload/employees"
          >
            Upload Employee details
          </NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    );
}

export default Upload
