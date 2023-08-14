import React from "react";
import { classNames } from "../../utils/ClassNames";
import { ReactComponent as IconBurger } from "../../assets/icons/burger.svg";

interface ISideMenuProps {
  classNames?: string[];
}

const SideMenu = (props: ISideMenuProps) => {
  return (
    <div className={classNames("side-menu", props.classNames)}>
      <IconBurger />
    </div>
  );
};

export default SideMenu;
