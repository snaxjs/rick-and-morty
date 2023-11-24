import React from "react";
import { IHTMLAttribute } from "interfaces/default";

export const insertAttributes = (
  ref: React.RefObject<HTMLButtonElement | any>,
  attributes: IHTMLAttribute[],
) => {
  attributes.forEach((attr) => {
    ref.current.setAttribute(attr.name, attr.value);
  });
};
