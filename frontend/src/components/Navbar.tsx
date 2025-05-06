"use client";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <FaUsersBetweenLines className="" />
          <span>Online Betting Dashboard</span>
        </Link>

        <button
          className={styles.menuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </div>

      {isMenuOpen && (
        <ul className={styles.dropdown}>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
