import React from "react";
import { classNames } from "utils/class_names";
import { IMenuNavItem } from "./interfaces";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface IMenuNavProps {
  classNames?: string[];
  items: IMenuNavItem[];
}

const MenuNav = (props: IMenuNavProps) => {
  const location = useLocation();

  return (
    <nav className={classNames("menu-nav", props.classNames)}>
      <ul className="menu-nav__list">
        {props.items.map((item: IMenuNavItem) => {
          const Icon = item?.icon && item.icon;
          const active =
            location.pathname === item.path
              ? " menu-nav__item-link_active"
              : "";

          return (
            <motion.li
              key={item.id}
              className="menu-nav__item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 5 }}
            >
              <Link className={`menu-nav__item-link${active}`} to={item.path}>
                {item.text}
              </Link>
              {Icon && <Icon className="menu-nav__item-icon" />}
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MenuNav;
