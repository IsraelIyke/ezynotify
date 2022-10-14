const { motion } = require("framer-motion");
import Link from "next/link";
import Nav from "./nav";
import Footer from "./footer";
import { FaTelegramPlane } from "react-icons/fa";
import { RiHandCoinFill } from "react-icons/ri";
import { useEffect, useState } from "react";

export default function Home() {
  const [move, setMove] = useState(false);
  function handleOne() {
    setMove(!move);
  }
  useEffect(() => {
    handleOne();
  }, []);

  useEffect(() => {
    handleTwo();
  }, [move]);

  function handleTwo() {
    const card = document.querySelector(".card__content");
    card.classList.toggle("is-flipped");
  }
  function handleClick() {
    handleOne();
  }
  return (
    <>
      <div className="explore-page-hero">
        <Nav />
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
          {/* <img
            src="./images/bg1c2.jpg"
            alt="bg"
            className="bg"
            // style={{ height: "20rem", width: "20rem" }}
          /> */}
          <div className="card" style={{ color: "white" }}>
            <div className="card__content">
              <div className="card__front">
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

              <div className="card__back">
                <RiHandCoinFill className="card__title" />

                <h3 className="card__title">
                  Reduce Data Consumption Cost by 60% and Save Time
                </h3>
                <p className="card__subtitle">
                  spend less time and data refreshing a website for an
                  anticipated post
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
          <Link href="/sign-up">
            <a className="back-btn">Sign Me Up</a>
          </Link>
          <div class="custom-shape-divider-bottom custom-shape">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </motion.div>
      </div>
      <div className="about">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
        <div class="custom-shape-divider-bottom-1665740462">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <Footer />
    </>
  );
}
