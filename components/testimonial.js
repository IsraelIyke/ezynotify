import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineLeft style={{ color: "gray", fontSize: "45px" }} />{" "}
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineRight style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {
  return (
    <>
      <div className="testimonial" id="testimonial">
        <div className="testimonial-container">
          <h4 style={{ marginBottom: 20 }}>TESTIMONIALS</h4>
          <h1 style={{ marginBottom: 20 }}>
            &quot; What Our Customers Are Saying
          </h1>
          <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
            <Card
              testimonial="It's simple but nice. It has really helped me save money"
              name="Adelola O."
            />
            <Card
              testimonial="Great service here for time management and more..."
              name="Jeremiah R."
            />
          </Slider>
        </div>
        <br />
      </div>
      <div
        className="banner-signup-btn cta-mobile"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>So What Are You Waiting For &#63; &nbsp;</h2>
        <Link href="/sign-up">
          <button>TRY FOR FREE</button>
        </Link>
      </div>
    </>
  );
};

const Card = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <p>{props.testimonial}</p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "skyblue" }}>{props.name}</span>
      </p>
    </div>
  );
};

export default Testimonial;
