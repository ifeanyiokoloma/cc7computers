import { NavLink, Outlet } from "react-router-dom";
import styles from "../upload/upload.module.css";

const Manage = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : null)}
          to="/admin/manage/computers"
        >
          Manage Computers
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : null)}
          to="/admin/manage/accessories"
        >
          Manage Accessories
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : null)}
          to="/admin/manage/employees"
        >
          Manage Employee details
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Manage;
