import React from "react";
import Spinner from "components/Spinner";
import { classNames } from "utils/ClassNames";

interface IButtonProps {
  classNames?: string[];
  isLoading?: boolean;
  disabled?: boolean;
  text?: string;
  onClick?: () => void;
}

const Button = (props: IButtonProps) => {
  return (
    <button
      className={classNames(
        `storybook-button${
          props.isLoading ? " storybook-button__spinner" : ""
        }`,
        props.classNames,
      )}
      onClick={props.onClick}
      type="button"
      disabled={props.disabled}
    >
      {props.isLoading && (
        <Spinner styles={{ width: 18, height: 18, marginRight: 18 }} />
      )}
      {props.text}
    </button>
  );
};
export default Button;
