export default function Feature(props) {
  return (
    <div className={props.className} id={props.id}>
      <h1>{props.featureTitle}</h1>
      <p>{props.featureContent}</p>
    </div>
  );
}
