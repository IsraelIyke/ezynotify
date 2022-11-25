export default function Image(props) {
  return (
    <div className={props.classname}>
      <img src={props.img} alt=" " width={260} className={props.className} />
    </div>
  );
}
