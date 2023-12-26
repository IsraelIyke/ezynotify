import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Payfield from "../../components/payfield";

export default function Payment(props) {
  const [email, setEmail] = useState("");

  function payWithPaystack(e) {
    e.preventDefault();

    let handler = PaystackPop.setup({
      key: "pk_live_645e23b0fa9f74beede330079a2f23bd9ad7d0e1",
      email: email,
      amount: 50000,
      onClose: function () {
        alert("Transaction canceled.");
      },
      callback: function (response) {
        let message = "Payment complete! Reference: " + response.reference;
        alert(message);
      },
    });
    handler.openIframe();
  }
  console.log(email);
  return (
    <>
      <Head>
        <script src="https://js.paystack.co/v1/inline.js"></script>
      </Head>
      <form id="paymentForm" className={props.className}>
        <h2>Payment via paystack</h2>
        <be>
          After payment, your transaction will be confirmed automatically and your
          ezynotify account will be updated. Thanks
          for your support &#128151;
        </be>
        <div class="form-group">
          <Payfield
            type="email"
            placeholder="Email"
            id="email"
            label="Email"
            setState={setEmail}
            value={email}
          />
        </div>

        <div class="form-submit">
          <button
            type="submit"
            className="submit-btn"
            onClick={payWithPaystack}
          >
            Pay
          </button>
        </div>
        <p style={{ fontSize: "0.9rem" }}>
          <Link href="https://paystack.com/">
            <a target="_blank">
              <span style={{ color: "skyblue" }}>Learn more </span>
            </a>
          </Link>
          about paystack
        </p>
        <p style={{ fontSize: "0.9rem" }}>
          Have complaints?
          <Link href="/contact">
            <a>
              {" "}
              <span style={{ color: "skyblue" }}> contact us </span>
            </a>
          </Link>
        </p>
      </form>
    </>
  );
}
