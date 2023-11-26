import React, { CSSProperties, JSX, useRef } from "react";
import { classNames } from "utils/class_names";
import { COLORS } from "constants/colors";
import hexRgb from "hex-rgb";

interface IInputProps {
  classNames?: string[];
  type?: React.HTMLInputTypeAttribute;
  onInput?: (e?: React.FormEvent<HTMLInputElement>) => void;
  value?: string | number;
  actionButton?: JSX.Element | JSX.Element[];
  stylesContainer?: CSSProperties;
}

const Input = (props: IInputProps) => {
  const ref = useRef(null);
  const { red, green, blue } = hexRgb(COLORS.DEFAULT_WEAK);
  const onFocus = () => {
    if (ref) {
      ref.current.style.outline = `2px solid rgba(${red}, ${green}, ${blue}, 0.7)`;
    }
  };

  const onBlur = () => {
    if (ref) {
      ref.current.style.outline = "";
    }
  };

  return (
    <span
      style={props.stylesContainer}
      ref={ref}
      className={classNames("input", props.classNames)}
    >
      <input
        className="input__native-el"
        type={props.type}
        onInput={props.onInput}
        value={props.value}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </span>
  );
};

export default Input;
