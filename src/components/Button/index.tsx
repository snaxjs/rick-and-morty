import React from "react";
import Spinner from "../Spinner";

interface ButtonProps {
  isLoading?: boolean;
  disabled?: boolean;
  text?: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      disabled={props.disabled}
      className={`storybook-button${
        props.isLoading ? " storybook-button__spinner" : ""
      }`}
    >
      {props.isLoading && (
        <Spinner styles={{ width: 18, height: 18, marginRight: 18 }} />
      )}
      {props.text}
    </button>
  );
};
export default Button;
