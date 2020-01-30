import React from "react";

// This component is used where we want to wrap whole output component in return statement
// and perform some logic on that.
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

// // This is basically used where we basically need global rule to apply,
// // in case of component html structure or javascript logic or anything else.
// const withClass = props => {
// return <div className={props.classes}>{props.children}</div>;
// };

export default withClass;
