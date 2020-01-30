import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Auxiliary";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    // Can only be used this way to initialize in older versions
    // Instead of mentioned below.
    // this.state = {
    //   persons: [
    //     { id: "1", name: "Max", age: 28 },
    //     { id: "2", name: "Manu", age: 29 },
    //     { id: "3", name: "Stephanie", age: 26 }
    //   ]
    // };
  }

  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Stephanie", age: 26 }
    ],
    showPersons: false,
    changeCounter: 0
  };

  // Executed just after the constructor isn executed and before render method.
  // Available only in class based components.
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // About to be removed, availavle in older version.
  // componentWillMount(){
  //   console.log('[App.js] componentWillMount')
  // }

  // Execute after render method, as changes are reflected on UI.
  // Execute each time ui is rendered.
  // Available only in class based components.
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  // Validate if change should be processed or not.
  // Available only in class based components.
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  // Execute after execution cycle of change is completed.
  // Available only in class based components.
  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  nameChangedHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // This approach of settin state is good if we are dependent on previous state value.
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });

    // Traditional approach to update value in state and as well good approach
    // if we are not dependent on previous state.
    // this.setState({
    //   persons: persons
    // });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <Aux>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
