import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  const toggleBtnRef = useRef(null);

  // React hook available in functional components, executed if there is any change in state
  // Or when state is initially loaded, using this we can trace change in all states as well as particular
  // Particular state.
  // It is executed after the execution cycle and available in functional components.
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    toggleBtnRef.current.click();

    return () => {
      console.log("[Cockpit.js] clean up work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  // Can you multiple times
  // useEffect();

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red' , 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!!!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
