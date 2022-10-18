const { motion } = require("framer-motion");
import Link from "next/link";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { HiUserGroup, HiUserCircle } from "react-icons/hi";
import { MdNotificationAdd, MdOutlineUpdate } from "react-icons/md";

export default function SideBar(props) {
  const [move, setMove] = useState(false);
  function handleOpen() {
    setMove(true);
  }
  function handleClose() {
    setMove(false);
  }
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <>
      <div className="sidebar-desktop">
        <p style={{ textAlign: "center", marginTop: "5rem" }}>
          {props.profile.email}
        </p>
        <ul className="sidebar-list">
          <li>
            <AiFillHome className="icon" />
            <div className="sidebar-list-item">dashboard</div>
          </li>
          <li>
            <MdNotificationAdd className="icon" />
            <div className="sidebar-list-item">notification</div>
          </li>
          <li>
            <MdOutlineUpdate className="icon" />
            <div className="sidebar-list-item">update</div>
          </li>
          <li>
            <HiUserGroup className="icon" />
            <div className="sidebar-list-item">referral</div>
          </li>
          <li>
            <HiUserCircle className="icon" />
            <div className="sidebar-list-item">profile</div>
          </li>
        </ul>
      </div>
      {/* mobile */}
      {toggle ? (
        <>
          <div className="sidebar-blur" onClick={handleToggle}></div>
          <div className="sidebar-open">
            <p style={{ textAlign: "center", marginTop: "1.6rem" }}>
              {props.profile.email}
            </p>
            <ul className="sidebar-list">
              <li>
                <AiFillHome className="icon" />
                <div className="sidebar-list-item">dashboard</div>
              </li>
              <li>
                <MdNotificationAdd className="icon" />
                <div className="sidebar-list-item">notification</div>
              </li>
              <li>
                <MdOutlineUpdate className="icon" />
                <div className="sidebar-list-item">update</div>
              </li>
              <li>
                <HiUserGroup className="icon" />
                <div className="sidebar-list-item">referral</div>
              </li>
              <li>
                <HiUserCircle className="icon" />
                <div className="sidebar-list-item">profile</div>
              </li>
            </ul>
            <p
              style={{ textAlign: "center", marginTop: "2rem" }}
              onClick={handleToggle}
            >
              &lt;&lt;&lt;
            </p>
          </div>
        </>
      ) : (
        <>
          <p
            style={{
              textAlign: "center",
              marginTop: "5rem",
              color: "transparent",
            }}
          >
            {props.profile.email}
          </p>
          <ul className="sidebar-list">
            <li>
              <AiFillHome className="icon" />
              <div className="sidebar-list-item"></div>
            </li>
            <li>
              <MdNotificationAdd className="icon" />
              <div className="sidebar-list-item"></div>
            </li>
            <li>
              <MdOutlineUpdate className="icon" />
              <div className="sidebar-list-item"></div>
            </li>
            <li>
              <HiUserGroup className="icon" />
              <div className="sidebar-list-item"></div>
            </li>
            <li>
              <HiUserCircle className="icon" />
              <div className="sidebar-list-item"></div>
            </li>
          </ul>
          <p
            style={{ textAlign: "center", marginTop: "2rem" }}
            onClick={handleToggle}
          >
            &gt;&gt;&gt;
          </p>
        </>
      )}
    </>
  );
}
