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
  return (
    <>
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.75,
        }}
        className="nav"
      >
        <h3>
          <Link href="/">
            <img src="./images/logo1.png" alt=" " width={90} height={50} />
          </Link>
        </h3>

        <ul className="nav-content">
          <li>
            <Link href="/">
              <a className="home-btn">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="faq-btn">FAQ</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="pricing-btn">Pricing</a>
            </Link>
          </li>
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
      </motion.div>
    </>
  );
}
