import React from "react";
import "./Hello.css";

class Hello extends React.Component {
  render() {
    return (
      <div className="f1 tc">
        <h1>Hello H1</h1>
        <p>Test Test</p>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

export default Hello;
