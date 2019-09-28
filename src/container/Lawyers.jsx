import React, { Component } from "react";
import Footer from "../component/Footer";

class Lawyer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Lawyers</h2>
        <Footer />
      </div>
    );
  }
}

export default Lawyer;
