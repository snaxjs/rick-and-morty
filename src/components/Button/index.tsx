import React from 'react';
import Spinner from "../Spinner";

interface ButtonProps {
  isLoading?: boolean;
  disable?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className={`storybook-button${props.isLoading? ' storybook-button__spinner' : ''}`}
    > {props.isLoading && <Spinner width={18} height={18} margin={18}/>}
      {props.label}
    </button>
  );
};
