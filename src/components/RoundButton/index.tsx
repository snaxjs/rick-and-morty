import React, { CSSProperties, JSX, useEffect, useRef } from "react";
import { classNames } from "utils/ClassNames";
import { insertAttributes } from "utils/insertAttributes";
import { IHTMLAttribute } from "interfaces/default";
import { COLORS } from "../../constants/colors";

interface IRoundButtonProps {
  children?: JSX.Element | JSX.Element[];
  classNames?: string[];
  onClick?: (e: React.MouseEvent) => void;
  attributes?: IHTMLAttribute[];
  color?: string;
}

const RoundButton = (props: IRoundButtonProps) => {
  const ref = useRef(null);
  const styles: CSSProperties = {
    backgroundColor: props.color || COLORS.PRIMARY,
  };

  useEffect(() => {
    insertAttributes(ref, props.attributes);
  }, []);

  return (
    <button
      style={styles}
      ref={ref}
      onClick={props.onClick}
      className={classNames("round-button", props.classNames)}
    >
      <span className="round-button__content-wrapper">{props.children}</span>
    </button>
  );
};

export default RoundButton;
