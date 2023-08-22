import React, { CSSProperties } from "react";
interface SpinnerProps {
  styles?: CSSProperties;
}

const Spinner = (props: SpinnerProps) => {
  return (
    <div className="spinner" style={props.styles}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Spinner;
