import Link from "next/link";

export default function Card(props) {
  return (
    <div className="card-container">
      <h3 className={props.className}>{props.title}</h3>
      <h5>{props.price}</h5>
      <ul>
        <li>{props.description1}</li>
        <li>{props.description2}</li>
        <li>{props.description3}</li>
      </ul>
      <Link href={props.link}>
        <button className={props.classname}>{props.cta}</button>
      </Link>
    </div>
  );
}
