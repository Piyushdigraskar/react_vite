import React, { PureComponent } from "react";

class MyPureComponent extends PureComponent {
  render() {
    console.log("Rendering...");
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default MyPureComponent;