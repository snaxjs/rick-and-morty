import React, { CSSProperties } from "react";
import { classNames } from "../../utils/ClassNames";

interface ISpinnerProps {
  classNames?: string[];
  styles?: CSSProperties;
}

const Spinner = (props: ISpinnerProps) => {
  return (
    <div
      className={classNames("spinner", props.classNames)}
      style={props.styles}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Spinner;
