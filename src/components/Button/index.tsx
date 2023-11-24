import React, {CSSProperties} from "react";
import Spinner from "components/Spinner";
import { classNames } from "utils/ClassNames";
import { VariantsTypes } from "types/global.types";

interface IButtonProps {
  classNames?: string[];
  isLoading?: boolean;
  disabled?: boolean;
  text?: string;
  onClick?: () => void;
  styles?: CSSProperties;
  variant?: VariantsTypes;
}

const Button = (props: IButtonProps) => {
  const variant = props.variant === "primary" ? "" : "button_secondary";

  return (
    <button
      className={classNames("button", [variant, ...props.classNames])}
      onClick={props.onClick}
      type="button"
      disabled={props.disabled}
      style={props.styles}
    >
      {props.isLoading && (
        <Spinner styles={{ width: 18, height: 18, marginRight: 18 }} />
      )}
      {props.text}
    </button>
  );
};
export default Button;
