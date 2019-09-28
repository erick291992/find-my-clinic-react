import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ResultsMap from "../container/movil/ResultsMap";
import Results from "../container/desktop/Results";
import { connect } from "react-redux";
import { selectActiveClinics } from "../store/clinic/reducer";
import { selectActiveFilter } from "../store/filter/reducer";
//import addClinics from "../store/clinic/action";
import { addFiltered } from "../store/clinic/action";
//import {} from "../store/filter/reducer";
import { filteredList } from "../utils/utils";

class FilterResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let list = filteredList(this.props.mylist, this.props.filters);
    this.props.addFiltered(list);
    console.log("from filtered function: ", list);
    let results = window.innerWidth < 600 ? <ResultsMap /> : <Results />;
    return <div>{results}</div>;
  }
}

const mapStateToProps = state => {
  return {
    mylist: selectActiveClinics(state),
    filters: selectActiveFilter(state)
  };
};

export default connect(
  mapStateToProps,
  { addFiltered }
)(FilterResult);
