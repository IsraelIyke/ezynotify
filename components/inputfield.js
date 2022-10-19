// import "./textfield.css";

export default function Inputfield(props) {
  return (
    <div className="forms-input">
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        onChange={(e) => props.setState(e.target.value)}
        value={props.value}
        autoComplete="off"
        className={props.classname}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}
