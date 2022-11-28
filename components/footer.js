import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="custom-shape-divider-top-1668414877">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="footer-content">
        <div>
          <Link href="/">
            <img
              src="./logo1.png"
              alt=" "
              width={180}
              style={{ padding: "1rem 0 1rem 0" }}
            />
          </Link>
        </div>
        <div className="footer-arrange">
          <div>
            <ul>
              <li className="footer-content-title">Company</li>
              <Link href="/about">
                <a>
                  <li>About</li>
                </a>
              </Link>
              <Link href="/about/#features">
                <a>
                  <li>Features</li>
                </a>
              </Link>
              <Link href="/sign-in">
                <a>
                  <li>Login</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>T&Cs</li>
                </a>
              </Link>
            </ul>
          </div>

          <div>
            <ul>
              <li className="footer-content-title">Pricing</li>
              <Link href="/pricing">
                <a>
                  <li>Plans</li>
                </a>
              </Link>
              <Link href="/payment">
                <a>
                  <li>Payment</li>
                </a>
              </Link>
            </ul>
          </div>
        </div>
        <div className="footer-arrange">
          <div className="footer-shift">
            <ul>
              <li className="footer-content-title">Support</li>

              <Link href="/contact">
                <a>
                  <li>Contact Us</li>
                </a>
              </Link>
              <Link href="/faq">
                <a>
                  <li>FAQs</li>
                </a>
              </Link>
            </ul>
          </div>
          <div>
            <ul>
              <li className="footer-content-title">Social</li>
              <li>Instagram</li>
              <li>Youtube</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
      <p style={{ color: "white", fontSize: "0.8rem" }}>
        Copyright &copy; 2022 ezynotify, All rights reserved.
      </p>
    </div>
  );
}
