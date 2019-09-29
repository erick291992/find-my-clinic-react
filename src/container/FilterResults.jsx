import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ResultsMap from "../container/movil/ResultsMap";
import Results from "../container/desktop/Results";
import { connect } from "react-redux";
import { selectActiveClinics } from "../store/clinic/reducer";
import { selectActiveFilter } from "../store/filter/reducer";
//import addClinics from "../store/clinic/action";
import { addFiltered, addClinics } from "../store/clinic/action";
import addFilter from "../store/filter/action";
//import {} from "../store/filter/reducer";
import { getClinics } from "../service/clinicService";
import { filteredList, saveFilterList, getFilters } from "../utils/utils";

class FilterResult extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    if (this.props.mylist.length === 0 && this.props.filters === 0) {
      const res = getClinics();
      res.then(clinicsList => {
        this.props.addClinics(clinicsList);
      });
    }
  };
  loadClinics = () => {
    console.log("refreshngs");
    const res = getClinics();
    res.then(clinicsList => {
      this.props.addClinics(clinicsList);
      this.props.addFilter(getFilters());
    });
  };

  render() {
    if (this.props.mylist.length == 0 && this.props.filters == 0) {
      this.loadClinics();
    }

    let list = filteredList(this.props.mylist, this.props.filters);
    this.props.addFiltered(list);
    saveFilterList(list);
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
  { addFiltered, addClinics, addFilter }
)(FilterResult);
