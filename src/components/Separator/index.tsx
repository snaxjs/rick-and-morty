import React from "react";
import { classNames } from "../../utils/class_names";

interface ISeparatorProps {
  classNames?: string[];
  color?: string;
  gap?: number;
}

const Separator = (props: ISeparatorProps) => {
  return (
    <div
      className={classNames("separator", props.classNames)}
      style={{
        backgroundColor: props.color,
        marginTop: props.gap,
        marginBottom: props.gap,
      }}
    ></div>
  );
};

export default React.memo(Separator);
