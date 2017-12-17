import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import Search from "../components/Search";
import { weatherData } from "../redux/actions"

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(weatherData, dispatch)
})

class SearchContainer extends Component {
  render() {
    return (
      <div>
        <Search {...this.props} getWeatherData={this.props.weatherDataStart}  />
      </div>
    );
  }
}

SearchContainer.propTypes = {
  getWeatherData: PropTypes.func
}

export default connect(null, mapDispatchToProps)(SearchContainer);
