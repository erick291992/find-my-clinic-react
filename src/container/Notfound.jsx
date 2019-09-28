import React, { Component } from "react";
import Footer from "../component/Footer";

class Notfound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Sorry! this pages doesn't exists</h2>
        <Footer />
      </div>
    );
  }
}

export default Notfound;
