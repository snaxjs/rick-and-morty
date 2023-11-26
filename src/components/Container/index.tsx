import React, { CSSProperties, JSX } from "react";
import { class_names } from "utils/class_names";
import {
  MAX_CONTAINER_WIDTH,
  PAGE_DEFAULT_PADDING_TOP,
  SIDE_MENU_WIDTH,
} from "constants/media";

interface IContainerProps {
  classNames?: string[];
  styles?: CSSProperties;
  children?: JSX.Element | JSX.Element[];
}

const Container = (props: IContainerProps) => {
  return (
    <div
      className={class_names("container", props.classNames)}
      style={{
        width: "100%",
        maxWidth: MAX_CONTAINER_WIDTH,
        paddingLeft: SIDE_MENU_WIDTH.PC + PAGE_DEFAULT_PADDING_TOP.PC,
        ...props.styles,
      }}
    >
      {props.children}
    </div>
  );
};

export default Container;
