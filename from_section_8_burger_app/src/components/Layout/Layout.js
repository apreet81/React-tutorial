import React from "react";

import Aux from "../../hoc/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.css";

const layout = props => {
  return (
    <Aux>
      {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
      <Toolbar />
      <SideDrawer/>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
