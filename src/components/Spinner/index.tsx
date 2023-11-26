import React, { CSSProperties } from "react";
import { class_names } from "utils/class_names";

interface ISpinnerProps {
  classNames?: string[];
  styles?: CSSProperties | any;
  color?: string;
}

const Spinner = (props: ISpinnerProps) => {
  const color: string = props.color || "#fff";
  return (
    <div
      className={class_names("spinner", props.classNames)}
      style={{
        width: 18,
        height: 18,
        ...props.styles,
        ["--spinner-color"]: color,
      }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Spinner;
