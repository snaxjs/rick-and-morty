import React from 'react';
import './index.scss';
import Spinner from "../Spinner";

interface ButtonProps {
  isLoading?: boolean;
  disable?: boolean;
  label: string;
  onClick?: () => void;
}


export const Button = ({
    isLoading,
    label,
    ...props
  }: ButtonProps) => {

  return (
    <button
      type="button"
      className={isLoading? 'storybook-button__spinner' : 'storybook-button'}
      {...props}
    > {isLoading && <Spinner width={18} height={18} margin={18}/>}
      {label}
    </button>
  );
};
