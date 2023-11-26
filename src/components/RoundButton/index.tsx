import React, { CSSProperties, JSX, useEffect, useRef } from "react";
import { classNames } from "utils/class_names";
import { insert_attributes } from "utils/insert_attributes";
import { IHTMLAttribute } from "interfaces/default";
import { COLORS } from "../../constants/colors";

interface IRoundButtonProps {
  children?: JSX.Element | JSX.Element[] | any;
  classNames?: string[];
  onClick?: (e?: React.MouseEvent) => void;
  attributes?: IHTMLAttribute[];
  color?: string;
  styles?: CSSProperties;
}

const RoundButton = (props: IRoundButtonProps) => {
  const ref = useRef(null);
  const styles: CSSProperties = {
    backgroundColor: props.color || COLORS.GRAYSCALE_BODY,
    ...props.styles,
  };

  useEffect(() => {
    insert_attributes(ref, props.attributes);
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
