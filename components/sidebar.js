const { motion } = require("framer-motion");
import Link from "next/link";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { MdOutlineUpdate } from "react-icons/md";
import { VscSymbolKeyword } from "react-icons/vsc";

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
        <p
          style={{
            textAlign: "center",
            paddingTop: "3rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid hsl(0, 0%, 80%)",
            fontWeight: "bolder",
          }}
        >
          {props.profile.email}
        </p>
        <ul className="sidebar-list">
          <Link href="/dashboard">
            <a>
              <li>
                <AiFillHome className="icon" />
                <div className="sidebar-list-item">dashboard</div>
              </li>
            </a>
          </Link>
          <Link href="/dashboard/keyword-notification">
            <a>
              <li>
                <VscSymbolKeyword className="icon" />
                <div className="sidebar-list-item">keyword notification</div>
              </li>
            </a>
          </Link>
          <Link href="/dashboard/update-notification">
            <a>
              <li>
                <MdOutlineUpdate className="icon" />
                <div className="sidebar-list-item">update notification</div>
              </li>
            </a>
          </Link>

          <Link href="/dashboard/profile">
            <a>
              <li className="profile">
                <HiUserCircle className="icon" />
                <div className="sidebar-list-item ">profile</div>
              </li>
            </a>
          </Link>
          <Link href="/dashboard/support">
            <a>
              <li>
                <BiSupport className="icon" />
                <div className="sidebar-list-item">support</div>
              </li>
            </a>
          </Link>
        </ul>
      </div>
      {/* mobile */}
      {toggle ? (
        <>
          <div className="sidebar-blur" onClick={handleToggle}></div>
          <div className="sidebar-open">
            <p
              style={{
                textAlign: "center",
                paddingTop: "1.7rem",
                paddingBottom: "1.2rem",
                borderBottom: "1px solid hsl(0, 0%, 80%)",
                fontWeight: "bolder",
                marginBottom: "0.65rem",
              }}
            >
              {props.profile.email}
            </p>
            <ul className="sidebar-list">
              <Link href="/dashboard">
                <a>
                  {" "}
                  <li>
                    <AiFillHome className="icon" />
                    <div className="sidebar-list-item">dashboard</div>
                  </li>
                </a>
              </Link>
              <Link href="/dashboard/keyword-notification">
                <a>
                  {" "}
                  <li>
                    <VscSymbolKeyword className="icon" />
                    <div className="sidebar-list-item">
                      keyword notification
                    </div>
                  </li>
                </a>
              </Link>
              <Link href="/dashboard/update-notification">
                <a>
                  <li>
                    <MdOutlineUpdate className="icon" />
                    <div className="sidebar-list-item">update notification</div>
                  </li>
                </a>
              </Link>

              <Link href="/dashboard/profile">
                <a>
                  {" "}
                  <li className="profile">
                    <HiUserCircle className="icon" />
                    <div className="sidebar-list-item">profile</div>
                  </li>
                </a>
              </Link>
              <Link href="/dashboard/support">
                <a>
                  <li>
                    <BiSupport className="icon" />
                    <div className="sidebar-list-item">support</div>
                  </li>
                </a>
              </Link>
            </ul>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "2rem",
                  color: "black",
                  width: "2rem",
                }}
                onClick={handleToggle}
              >
                &lt;&lt;&lt;
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="icon-sidebar">
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
            <Link href="/dashboard/">
              <a>
                <li>
                  <AiFillHome className="icon" />
                </li>
              </a>
            </Link>
            <Link href="/dashboard/keyword-notification">
              <a>
                <li>
                  <VscSymbolKeyword className="icon" />
                </li>
              </a>
            </Link>
            <Link href="/dashboard/update-notification">
              <a>
                <li>
                  <MdOutlineUpdate className="icon" />
                </li>
              </a>
            </Link>

            <Link href="/dashboard/profile">
              <a>
                <li className="profile">
                  <HiUserCircle className="icon" />
                </li>
              </a>
            </Link>
            <Link href="/dashboard/support">
              <a>
                <li>
                  <BiSupport className="icon" />
                </li>
              </a>
            </Link>
          </ul>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <p
              style={{
                textAlign: "center",
                marginTop: "2rem",
                color: "black",
                width: "2rem",
              }}
              onClick={handleToggle}
            >
              &gt;&gt;&gt;
            </p>
          </div>
        </div>
      )}
    </>
  );
}
