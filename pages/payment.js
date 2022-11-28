import Payment from "./api/paystack";
import Nav from "../components/nav";

export default function Payments() {
  return (
    <>
      <Nav />
      <Payment className="payment-form" />
    </>
  );
}
