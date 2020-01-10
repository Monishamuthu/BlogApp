import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <TextField
          id="outlined-basic"
          value="testttttdfsgsdfgsdg"
          label=""
          variant="outlined"
        />
      </div>
    );
  }
}
export default TextBox;
