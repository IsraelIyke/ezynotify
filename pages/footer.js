const { motion } = require("framer-motion");

export default function Footer() {
  return (
    <>
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.75,
        }}
        className="footer"
      >
        <ul className="footer-content">
          <li className="footer-text">
            Copyright © 2022 ezy, all right reserved
          </li>
        </ul>
      </motion.div>
    </>
  );
}
