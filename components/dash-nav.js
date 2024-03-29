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
      <div className="dash-nav">
        <motion.h3
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.75,
          }}
        >
          <Link href="/">
            <a>
              <img src="/logo3.png" alt=" " width={110} />
            </a>
          </Link>
        </motion.h3>

        <motion.ul
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.75,
          }}
          className="dash-nav-content"
        >
          <li>
            <a className="home-btn" onClick={props.signOut}>
              Log Out
            </a>
          </li>
        </motion.ul>
      </div>
    </>
  );
}
