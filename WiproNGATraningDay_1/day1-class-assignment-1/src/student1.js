import { Component } from "react";

class Student1 extends Component {
    render() {
      const { name, address, scores } = this.props;
      return (
        <div>
          <h3>Student Details (Class)</h3>
          <p>Name: {name}</p>
          <p>Address: {address}</p>
          <p>Scores: {scores.join(", ")}</p>
        </div>
      );
    }
  }
  export default Student1;