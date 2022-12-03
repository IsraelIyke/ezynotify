import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Textfield(props) {
  const [textType, setTextType] = useState(props.type);
  return (
    <div className="form-input">
      <input
        type={textType}
        placeholder={props.placeholder}
        id={props.id}
        onChange={(e) => props.setState(e.target.value)}
        value={props.value}
        autoComplete="off"
        className={props.classname}
        onKeyUp={props.onKeyUp}
      />
      <label htmlFor={props.id}>{props.label}</label>
      {props.password &&
        (textType == "password" ? (
          <AiFillEye
            className="pass-icon"
            onClick={() => setTextType("text")}
          />
        ) : (
          <AiFillEyeInvisible
            className="pass-icon"
            onClick={() => setTextType("password")}
          />
        ))}
    </div>
  );
}
