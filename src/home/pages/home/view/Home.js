import React, { Component } from "react";
import Login from "../../login/view/Login";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}
export default Home;
