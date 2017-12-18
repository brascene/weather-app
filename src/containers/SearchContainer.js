import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Search from '../components/Search';
import { weatherData, weatherDataByCoord } from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(Object.assign({}, weatherData, weatherDataByCoord), dispatch),
});

class SearchContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Search
          {...this.props}
          getWeatherData={this.props.weatherDataStart}
          getWeatherDataCoord={this.props.weatherDataCoordStart}
        />
      </div>
    );
  }
}

SearchContainer.propTypes = {
  getWeatherData: PropTypes.func.isRequired,
  weatherDataStart: PropTypes.func.isRequired,
  weatherDataCoordStart: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SearchContainer);
