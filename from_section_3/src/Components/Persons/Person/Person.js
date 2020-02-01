import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Person.css";
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    // Its compulsary to call super with props if defining constructor and class is extending another class.
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      // // Inbuilt react mechanism to render multiple elements without single parent.
      // <React.Fragment>
      //   <p onClick={this.props.click}>
      //     I'm {this.props.name} and I am {this.props.age} old!
      //   </p>
      //   <p>{this.props.children}</p>
      //   <input onChange={this.props.changed} value={this.props.name} />
      // </React.Fragment>

      // Hack to render without external element.
      <Aux>
        <AuthContext.Consumer>
          {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>

      // Return single root element.
      // <div className={classes.Person}>
      //   <p onClick={this.props.click}>
      //     I'm {this.props.name} and I am {this.props.age} old!
      //   </p>
      //   <p>{this.props.children}</p>
      //   <input onChange={this.props.changed} value={this.props.name} />
      // </div>

      // Return multiple element array instead of just single element
      // [<p key="i1" onClick={this.props.click}>
      //   I'm {this.props.name} and I am {this.props.age} old!
      // </p>,
      // <p key="i2">{this.props.children}</p>,
      // <input key="i3" onChange={this.props.changed} value={this.props.name} />]
    );
  }
}

// Define data types for acceptable props for this component, to avoid mistakes/error from other developers.
// It is done using externally installed library PropTypes
Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
};

export default withClass(Person, classes.Person);
