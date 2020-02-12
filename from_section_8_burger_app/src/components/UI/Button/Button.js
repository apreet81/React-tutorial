import React from "react";

import classes from "./Button.css";

const button = porps => (
  <button className={[classes.Button, classes[porps.btnType]].join(' ')} onClick={porps.clicked}>{porps.children}</button>
);


export default button;