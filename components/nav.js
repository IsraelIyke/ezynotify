import { useEffect } from "react";
const { motion } = require("framer-motion");
import Link from "next/link";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";

export default function Nav() {
  const [move, setMove] = useState(false);
  function handleOpen() {
    setMove(true);
  }
  function handleClose() {
    setMove(false);
  }
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    if (
      document.body.scrollTop > 70 ||
      document.documentElement.scrollTop > 70
    ) {
      document.getElementById("header").style.boxShadow = "0px 0px 1px gray";
    } else {
      document.getElementById("header").style.boxShadow = "none";
    }
  }
  return (
    <>
      {/* for desktop */}
      <nav className="nav-container" id="header">
        <ul>
          <img src="./logo2.png" alt=" " width={110} />
        </ul>
        <ul style={{ marginLeft: "9rem" }}>
          <li>Home</li>
          <li>FAQ</li>
          <li>Pricing</li>
        </ul>
        <ul>
          <li className="nav-login nav-button">Login</li>
          <li className="nav-signup nav-button">Sign up</li>
        </ul>
      </nav>

      {/* for mobile */}
      <nav className="nav-container-mobile" id="header">
        {/* <ul>
          <li>Home</li>
          <li>FAQ</li>
          <li>Pricing</li>
        </ul> */}
        <ul>
          {move ? (
            <li>
              <FaTimes
                className="open"
                onClick={handleClose}
                style={{ marginRight: "0.5rem" }}
              />
            </li>
          ) : (
            <li className="menu-toggle">
              <HiMenuAlt4 className="open" onClick={handleOpen} />
            </li>
          )}
        </ul>

        {/* mobile */}
        <ul className="nav-content-mobile">
          {move && <div onClick={handleClose} className="mobile-blur"></div>}
          {move && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.1,
                duration: 0.55,
              }}
              className="mobile-nav"
            >
              <li>
                <Link href="/">
                  <a className="home-btn">Home</a>
                </Link>
              </li>
              <hr />
              <li>
                <Link href="/">
                  <a className="faq-btn">FAQ</a>
                </Link>
              </li>
              <hr />
              <li>
                <Link href="/">
                  <a className="pricing-btn">Pricing</a>
                </Link>
              </li>
              <hr />
              <li>
                <Link href="/sign-in">
                  <a className="login-btn">Login</a>
                </Link>
              </li>

              <li>
                <Link href="/sign-up">
                  <a className="register-btn">Sign up</a>
                </Link>
              </li>
            </motion.div>
          )}
        </ul>

        <ul>
          <img
            src="./logo2.png"
            alt=" "
            width={110}
            className="nav-mobile-image"
          />
        </ul>
        <ul>
          <li className="nav-login nav-button">Login</li>
          {/* <li>Sign up</li> */}
        </ul>
      </nav>
    </>
  );
}
