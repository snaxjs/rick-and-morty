import React from "react";
import { classNames } from "../../utils/ClassNames";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import IconBurger from "../../assets/icons/burger.svg";
import { isForwardClosure } from "../../helpers/isForwardClosure";

interface ISideMenuProps {
  classNames?: string[];
}

const SideMenu = (props: ISideMenuProps) => {
  const x = useMotionValue(-400);
  const width = useTransform(x, (value) => value + 50);
  const right = useTransform(x, (value) => Math.abs(value) - 400);
  const isDragForward = isForwardClosure();

  const onMenuDragEnd = (event: any, info: any) => {
    console.log(info.point.x);
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
        style={{ width }}
      ></motion.div>
      <motion.div
        className="side-menu__menu-wrapper"
        style={{ x, width: 464 }}
        dragMomentum={false}
        drag="x"
        dragConstraints={{ left: -400, right: 0 }}
        onDragEnd={onMenuDragEnd}
      >
        <div className="side-menu__menu">
          <div className="side-menu__header">
            <motion.div className="side-menu__burger-wrapper" style={{ right }}>
              <IconBurger className="side-menu__burger" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SideMenu;
