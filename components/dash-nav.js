const { motion } = require("framer-motion");
import Link from "next/link";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";

export default function DashNav(props) {
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
        className="dash-nav"
      >
        <h3>
          <Link href="/">
            <img src="./images/logo1.png" alt=" " width={90} height={50} />
          </Link>
        </h3>

        <ul className="dash-nav-content">
          <li>
            <Link href="/">
              <a className="home-btn" onClick={props.signOut}>
                Log Out
              </a>
            </Link>
          </li>
        </ul>
      </motion.div>
    </>
  );
}
