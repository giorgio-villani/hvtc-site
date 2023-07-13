"use client";

import styles from "@/styles/main.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["navbar-list"]}>
        <li className={styles["navbar-item"]}>Home</li>
        <li className={styles["navbar-item"]}>About</li>
        <li className={styles["navbar-item"]}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
