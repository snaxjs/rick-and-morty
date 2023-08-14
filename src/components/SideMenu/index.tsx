import React, { DragEventHandler, useState } from "react";
import { classNames } from "../../utils/ClassNames";
import {
  animate,
  DragElastic,
  DragHandlers,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import IconBurger from "../../assets/icons/burger.svg";
import { isForwardClosure } from "../../helpers/isForwardClosure";
import { debounce as _debounce } from "../../helpers/debounce";

interface ISideMenuProps {
  classNames?: string[];
}

const SideMenu = (props: ISideMenuProps) => {
  const [open, setOpen] = useState(false);
  const x = useMotionValue(-64);
  const width = useTransform(x, (value) => value + 50);
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
        style={{ width }}
      ></motion.div>
      <motion.div
        className="side-menu__menu"
        style={{ x, width: 464 }}
        dragMomentum={false}
        drag="x"
        dragConstraints={{ left: -400, right: 0 }}
        onDragEnd={onMenuDragEnd}
      >
        <div className="side-menu__header">
          <div className="side-menu__burger-wrapper">
            <IconBurger className="side-menu__burger" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SideMenu;
