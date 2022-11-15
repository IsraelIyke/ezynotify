import Link from "next/link";
import { useEffect } from "react";

export default function Nav() {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    if (
      document.body.scrollTop > 70 ||
      document.documentElement.scrollTop > 70
    ) {
      document.getElementById("header").style.boxShadow = "0px 0px 1px gray";
    } else {
      document.getElementById("header").style.boxShadow = "none";
    }
  }
  return (
    <>
      {/* for desktop */}
      <nav className="nav-container" id="header">
        <ul>
          <img src="./logo2.png" alt=" " width={110} />
        </ul>
        <ul>
          <li>Home</li>
          <li>FAQ</li>
          <li>Pricing</li>
        </ul>
        <ul>
          <Link href="/sign-in">
            <li className="nav-login nav-button">Login</li>
          </Link>

          <li className="nav-signup nav-button">Sign up</li>
        </ul>
      </nav>

      {/* for mobile */}
      <nav className="nav-container-mobile">
        {/* <ul>
          <li>Home</li>
          <li>FAQ</li>
          <li>Pricing</li>
        </ul> */}
        <ul>
          <img src="./logo2.png" alt=" " width={110} />
        </ul>
        {/* <ul>
          <li>Login</li>
          <li>Sign up</li>
        </ul> */}
      </nav>
    </>
  );
}
