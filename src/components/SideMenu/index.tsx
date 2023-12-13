import React, { CSSProperties, useState } from "react";
import { classNames } from "utils/class_names";
import { motion } from "framer-motion";
import IconBurger from "assets/icons/burger.svg";
import Logo from "assets/svg/logo.svg";
import MenuNav from "components/MenuNav";
import { SIDE_MENU } from "constants/side_menu_items";
import RickAndMortyImage from "assets/png/rick_and_morty.png";

interface ISideMenuProps {
  classNames?: string[];
  styles?: CSSProperties | any;
}

const SideMenu = (props: ISideMenuProps) => {
  const [show, setShow] = useState(true);
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
      <motion.div
        className="side-menu__burger-wrapper"
        animate={{
          rotate: show ? 360 : 0,
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <IconBurger className="side-menu__burger" onClick={onShowMenu} />
      </motion.div>
      <div className="side-menu__menu-wrapper">
        <div className="side-menu__header">
          <motion.div
            className="side-menu__logo-wrapper"
            animate={{
              opacity: show ? 1 : 0,
            }}
          >
            <Logo className="side-menu__logo" />
          </motion.div>
        </div>
        <motion.div
          className="side-menu__nav-wrapper"
          animate={{
            opacity: show ? 1 : 0,
          }}
        >
          <MenuNav classNames={["side-menu__menu-nav"]} items={SIDE_MENU} />
        </motion.div>
        <motion.div
          animate={{
            opacity: show ? 1 : 0,
          }}
        >
          <img
            alt="Rick and Morty"
            src={RickAndMortyImage}
            className="side-menu__rick-morty-img"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SideMenu;
