import React, { CSSProperties, useState } from "react";
import { classNames } from "utils/class_names";
import IconBurger from "assets/icons/burger.svg";
import IconRoundDoubleArrow from "assets/icons/round_double_arrow.svg";
import Logo from "assets/svg/logo.svg";
import MenuNav from "components/MenuNav";
import { SIDE_MENU } from "constants/side_menu_items";
import RickAndMortyImage from "assets/png/rick_and_morty.png";

interface ISideMenuProps {
  classNames?: string[];
  styles?: CSSProperties | any;
}

const SideMenu = (props: ISideMenuProps) => {
  const [show, setShow] = useState(false);
  const BURGER_WIDTH: string = "64px";

  const onShowMenu = () => setShow((prev) => !prev);

  return (
    <div
      style={{
        ...props.styles,
        ["--side-menu-burger-w"]: BURGER_WIDTH,
      }}
      className={classNames("side-menu", [
        ...props.classNames,
        `side-menu_${show ? "show" : "close"}`,
      ])}
    >
      <div className="side-menu__menu-wrapper">
        <div className="side-menu__menu">
          <div className="side-menu__arrows-wrapper">
            <IconRoundDoubleArrow
              className="side-menu__arrows"
              onClick={onShowMenu}
            />
          </div>
          <div className="side-menu__header">
            <div className="side-menu__burger-wrapper">
              <IconBurger className="side-menu__burger" />
            </div>
            <div className="side-menu__logo-wrapper">
              <Logo className="side-menu__logo" />
            </div>
          </div>
          <div>
            <MenuNav classNames={["side-menu__menu-nav"]} items={SIDE_MENU} />
          </div>
          <div>
            <img
              alt="Rick and Morty"
              src={RickAndMortyImage}
              className="side-menu__rick-morty-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
