// import { motion } from "framer-motion";
const { motion } = require("framer-motion");
import Link from "next/link";
// import Nav from "./nav";
// import Footer from "./footer";

import { FaTelegramPlane } from "react-icons/fa";
import { RiHandCoinFill } from "react-icons/ri";
import { useEffect, useState } from "react";

export default function Home() {
  const [move, setMove] = useState(false);
  function handleOne() {
    setMove(!move);
  }
  useEffect(() => {
    setTimeout(handleOne(), 1000);
  }, []);

  useEffect(() => {
    setTimeout(handleTwo(), 1000);
  }, [move]);

  function handleTwo() {
    const card = document.querySelector(".card__content");
    card.classList.toggle("is-flipped");
  }
  function handleClick() {
    handleOne();
    // handleTwo();
  }
  return (
    <>
      <div className="explore-page-hero">
        {/* <img
          src="./images/bg1c2.jpg"
          alt="bg"
          className="bg"
          // style={{ height: "20rem", width: "20rem" }}
        /> */}
        {/* <Nav /> */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.75,
          }}
          className="content"
          style={{ textAlign: "center" }}
        >
          <div className="card" style={{ color: "white" }}>
            <div className="card__content">
              <div className="card__front">
                <RiHandCoinFill className="card__title" />

                <h3 className="card__title">
                  Reduce Data Consumption Cost by 60% and Save Time
                </h3>
                <p className="card__subtitle">
                  spend less time and data refreshing a website for an
                  anticipated post
                </p>
              </div>

              <div className="card__back">
                <FaTelegramPlane className="card__title" />
                <h3 className="card__title">Notification Message</h3>

                <p className="card__subtitle">
                  Receive alert/notification of posts including blog posts,
                  movies upload etc from your favorite website for{" "}
                  <span
                    style={{
                      fontWeight: "bolder",
                    }}
                    className="underline"
                  >
                    Free
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="hero_btn">
            <div className="hero-back-toggle"></div>
            <motion.div
              onClick={handleClick}
              className="hero-back-btn"
              animate={{ x: move ? 10 : 38 }}
              transition={{ type: "spring", duration: 0.1 }}
            ></motion.div>
          </div>
          <Link href="/explore">
            <a className="back-btn">Sign Me Up</a>
          </Link>
        </motion.div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
