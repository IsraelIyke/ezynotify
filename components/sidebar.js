const { motion } = require("framer-motion");
import Link from "next/link";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";

export default function SideBar(props) {
  const [move, setMove] = useState(false);
  function handleOpen() {
    setMove(true);
  }
  function handleClose() {
    setMove(false);
  }
  return (
    <>
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.75,
        }}
        className="sidebar-nav"
      >
        <ul className="sidebar-nav-content">
          <li
            style={{
              padding: "1rem 0 1rem 1.6rem",
              overflowX: "hidden",
              width: "100%",
              textAlign: "center",
            }}
          >
            <Link href="/">
              <div className="email">{props.profile.email}</div>
            </Link>
          </li>
          <hr
            style={{
              color: "white",
              width: "100%",
              height: "0.1rem",
              marginBottom: "2rem",
            }}
          />
          <Link href="/dashboard/">
            <li className="sidebar-options">
              <a className="faq-btn">Home</a>
            </li>
          </Link>
          <Link href="/dashboard/search">
            <li className="sidebar-options">
              <a className="pricing-btn">Search</a>
            </li>
          </Link>
          <Link href="/dashboard/latest-update">
            <li className="sidebar-options">
              <a className="pricing-btn">Web Update</a>
            </li>
          </Link>
          <Link href="/dashboard/referral">
            <li className="sidebar-options">
              <a className="pricing-btn">Referral</a>
            </li>
          </Link>
          <Link href="/dashboard/profile">
            <li className="sidebar-options">
              <a className="pricing-btn">Profile</a>
            </li>
          </Link>
        </ul>
      </motion.div>
    </>
  );
}
