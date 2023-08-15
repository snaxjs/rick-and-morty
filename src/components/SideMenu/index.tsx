import React from "react";
import { classNames } from "../../utils/ClassNames";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import IconBurger from "../../assets/icons/burger.svg";
import IconRoundDoubleArrow from "../../assets/icons/round-double-arrow.svg";
import Logo from "../../assets/svg/logo.svg";
import { isForwardClosure } from "../../helpers/isForwardClosure";
import MenuNav from "../MenuNav";
import { SIDE_MENU } from "../../constants/sideMenuItems";
import RickAndMortyImage from "../../assets/png/rick_and_morty.png";

interface ISideMenuProps {
  classNames?: string[];
}

const SideMenu = (props: ISideMenuProps) => {
  const x = useMotionValue(-400);
  const width = useTransform(x, (value) => value + 50);
  const right = useTransform(x, (value) => Math.abs(value) - 400);
  const opacity = useTransform(x, [-400, -64], [0, 1]);
  const opacityReverse = useTransform(x, [-400, -64], [1, 0]);
  const color = useTransform(x, [-400, -64], ["#262338", "#14142B"]);
  const isDragForward = isForwardClosure();

  const onMenuDragEnd = (event: any, info: any) => {
    if (isDragForward(info.velocity.x)) {
      animate(x, -64, { duration: 0.7 });
    } else if (!isDragForward(info.velocity.x)) {
      animate(x, -400, { duration: 0.7 });
    }
  };

  return (
    <div className={classNames("side-menu", props.classNames)}>
      <motion.div
        className="side-menu__substrate"
        style={{ width, backgroundColor: color }}
      ></motion.div>
      <motion.div
        className="side-menu__menu-wrapper"
        style={{ x, width: 464, backgroundColor: color }}
        dragMomentum={false}
        drag="x"
        dragConstraints={{ left: -400, right: 0 }}
        onDragEnd={onMenuDragEnd}
      >
        <div className="side-menu__menu">
          <motion.div
            style={{ right, opacity: opacityReverse }}
            className="side-menu__arrows-wrapper"
          >
            <IconRoundDoubleArrow className="side-menu__arrows" />
          </motion.div>
          <div className="side-menu__header">
            <motion.div
              className="side-menu__burger-wrapper"
              style={{ right, opacity: opacityReverse }}
            >
              <IconBurger className="side-menu__burger" />
            </motion.div>
            <motion.div className="side-menu__logo-wrapper" style={{ opacity }}>
              <Logo className="side-menu__logo" />
            </motion.div>
          </div>
          <motion.div style={{ opacity }}>
            <MenuNav classNames={["side-menu__menu-nav"]} items={SIDE_MENU} />
          </motion.div>
          <motion.div style={{ opacity }}>
            <img
              src={RickAndMortyImage}
              className="side-menu__rick-morty-img"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SideMenu;
