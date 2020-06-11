// create your App component here
import React, { Component } from "react";

export default class App extends Component {
  state = {
    inSpace: [],
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ inSpace: json.people });
      });
  }

  render() {
    console.log(this.state.inSpace);
    return (
      <div>
        <h1>People in the space</h1>
        <ul>
        {this.state.inSpace.map((person, i) => (
          <li key={i}>{person.name}</li>
        ))}

        </ul>
      </div>
    );
  }
}
