import React, { CSSProperties, JSX } from "react";
import { classNames } from "utils/ClassNames";
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
      className={classNames("container", props.classNames)}
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
