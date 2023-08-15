import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./components/SideMenu";

const App = () => {
  return (
    <>
      <SideMenu classNames={["app__side-menu"]} />
      <Outlet />
    </>
  );
};

export default App;
