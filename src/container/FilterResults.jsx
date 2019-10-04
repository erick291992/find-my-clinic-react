import React, { Component } from "react";
import ResultsMap from "../container/movil/ResultsMap";
import Results from "../container/desktop/Results";

class FilterResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clinics: []
    };
  }

  render() {
    let results = window.innerWidth < 600 ? <ResultsMap /> : <Results />;
    return <div>{results}</div>;
  }
}

export default FilterResult;
