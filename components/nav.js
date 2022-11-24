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
  // useEffect(() => {
  //   window.onscroll = function () {
  //     scrollFunction();
  //   };
  // }, []);

  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 70 ||
  //     document.documentElement.scrollTop > 70
  //   ) {
  //     document.getElementById("header").style.boxShadow = "0px 0px 1px gray";
  //   } else {
  //     document.getElementById("header").style.boxShadow = "0px 0px 0px white";
  //   }
  // }
  return (
    <>
      {/* for desktop */}
      <nav className="nav-container">
        <ul>
          <Link href="/">
            <img src="./logo2.png" alt=" " width={110} />
          </Link>
        </ul>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/">
            <li>FAQ</li>
          </Link>
          <Link href="/">
            <li>Pricing</li>
          </Link>
        </ul>
        <ul>
          <Link href="/sign-in">
            <li className="nav-login nav-button">Login</li>
          </Link>
          <Link href="/sign-up">
            <li className="nav-signup nav-button">Sign up</li>
          </Link>
        </ul>
      </nav>

      {/* for mobile */}
      <nav className="nav-container-mobile">
        <ul>
          {move ? (
            <li
              style={{
                marginRight: "1.5rem",
                marginLeft: "0.5rem",
                marginTop: "0.3rem",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
              onClick={handleClose}
            >
              x
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
          <Link href="/">
            <img
              src="./logo3.png"
              alt=" "
              width={110}
              className="nav-mobile-image"
            />
          </Link>
        </ul>
        <ul>
          <Link href="/sign-in">
            <li className="nav-login nav-button">Login</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
