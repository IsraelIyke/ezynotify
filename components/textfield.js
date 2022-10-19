// import "./textfield.css";

export default function Textfield(props) {
  return (
    <div className="form-input">
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
