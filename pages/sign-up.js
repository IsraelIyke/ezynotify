const { motion } = require("framer-motion");
import Link from "next/link";
import Footer from "./footer";
import Nav from "./nav";

export default function Register() {
  return (
    <>
      <Nav />
      <div className="explore-page-hero">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.75,
          }}
          className="header-content"
        >
          <h1 className="title-text">Explore National Parks</h1>
          <p className="sub-text">
            Explore Nation Parks is the countries leader for nation park tours.
            Make your vacation great with one of our amazing tour guides!
          </p>
          <Link href="/">
            <a className="back-btn">View Our Parks</a>
          </Link>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
