const { motion } = require("framer-motion");
import Link from "next/link";

import { FaTelegramPlane } from "react-icons/fa";
import { RiHandCoinFill } from "react-icons/ri";
import { useEffect, useState } from "react";

export default function Banner() {
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
      <div className="banner-container">
        <div className="card" style={{ color: "black" }}>
          <div className="card__content">
            <div className="card__front">
              <FaTelegramPlane className="card__title" />
              <h3 className="card__title">Notification Message</h3>

              <p className="card__subtitle">
                Receive alert/notification of posts including blog posts, movies
                upload etc from your favorite website for{" "}
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
                spend less time and data refreshing a website for an anticipated
                post
              </p>
            </div>
          </div>
          <br />

          <div className="hero_btn">
            <div className="hero-back-toggle"></div>
            <motion.div
              onClick={handleClick}
              className="hero-back-btn"
              animate={{ x: move ? 10 : 38 }}
              transition={{ type: "spring", duration: 0.1 }}
            ></motion.div>
          </div>
          <div className="banner-signup-btn">
            <button>TRY FOR FREE</button>
          </div>
        </div>
      </div>
    </>
  );
}
