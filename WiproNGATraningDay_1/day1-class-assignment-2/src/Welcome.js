import { Component } from "react";

class Welcome extends Component {
    render() {
      return (
        <div>
          <h2>{this.props.bname}, Welcome {this.props.name}!</h2>
          <p>Address: {this.props.address}</p>
        </div>
      );
    }
  }

export default Welcome;