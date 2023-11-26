import React, { CSSProperties, ReactNode, useRef } from "react";
import { classNames } from "utils/class_names";
import { COLORS } from "constants/colors";
import hexRgb from "hex-rgb";

interface IInputProps {
  classNames?: string[];
  type?: React.HTMLInputTypeAttribute;
  onInput?: (e?: React.FormEvent<HTMLInputElement>) => void;
  value?: string | number;
  actionElement?: ReactNode;
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
      style={{
        paddingRight: props.actionElement ? 10 : 0,
        ...props.stylesContainer,
      }}
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
      {<span className="input__action-el">{props.actionElement}</span> || null}
    </span>
  );
};

export default Input;
