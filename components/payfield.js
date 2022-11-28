export default function Payfield(props) {
  return (
    <div className="pay-input">
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        onChange={(e) => props.setState(e.target.value)}
        value={props.value}
        autoComplete="on"
        required
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}
