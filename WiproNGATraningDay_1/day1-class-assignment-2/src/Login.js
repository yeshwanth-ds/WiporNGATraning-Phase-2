import { Component } from "react";

class Login extends Component {
    render() {
      return (
        <div>
          <h2>{this.props.bname} Login</h2>
          <p>Name: {this.props.name}</p>
          <p>Address: {this.props.address}</p>
        </div>
      );
    }
  }

export default Login;