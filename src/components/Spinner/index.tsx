import React, { CSSProperties } from "react";
import { classNames } from "utils/ClassNames";

interface ISpinnerProps {
  classNames?: string[];
  styles?: CSSProperties | any;
  color?: string;
}

const Spinner = (props: ISpinnerProps) => {
  const color: string = props.color || "#fff";
  return (
    <div
      className={classNames("spinner", props.classNames)}
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
