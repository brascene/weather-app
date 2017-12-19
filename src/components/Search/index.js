import React from 'react';
import { Input, Label, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';

import {
  getCurrentLocationSuccess,
  getCurrentLocationError,
  getCurrentLocationStart,
} from '../../redux/actions';

class Search extends React.Component {
  state = {
    getMyLocationLoader: false,
    city: '',
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.weatherData !== {}) {
      this.props.history.push('/result');
    }
  }

  _handleGetMyLocation = () => {
    this.setState({ getMyLocationLoader: true });
    this.props.getCurrentLocationStart();
    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      const success = (pos) => {
        const crd = pos.coords;
        this.props.getCurrentLocationSuccess({
          latitude: crd.latitude,
          longitude: crd.longitude,
        });
        this.setState({ getMyLocationLoader: false });
        this.props.getWeatherDataCoord({
          lat: crd.latitude,
          lon: crd.longitude,
        });
      };

      const error = (err) => {
        this.props.getCurrentLocationError({
          code: err.code,
          message: err.message,
        });
        this.setState({ getMyLocationLoader: false });
      };

      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  _handleSearchByCity = () => {
    const { city } = this.state;
    this.props.getWeatherData(city);
  };

  render() {
    const { getMyLocationLoader } = this.state;
    return (
      <div className="ui container center" style={{ width: '80%', paddingTop: 70 }}>
        <div className="search-container center">
          <div style={{ height: 260 }} />
          <Input
            className="search"
            style={{ width: '70%', minWidth: 300 }}
            icon="search"
            placeholder="Enter the city name visea"
            size="big"
            onChange={e => this.setState({ city: e.target.value })}
          />
          <br />
          <br />
          <Button
            onClick={this._handleSearchByCity}
            className="goButton"
            content="Go"
          />
          <div style={{ height: 260 }}>
            <Label
              style={{
                  backgroundColor: 'white',
                  fontSize: 16,
                  fontWeight: '200',
                }}
            >
                or
            </Label>{' '}
            <br />
            <Button
              style={{ backgroundColor: 'white' }}
              loading={getMyLocationLoader}
              content="use my current location"
              onClick={this._handleGetMyLocation}
              basic
              color="purple"
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weatherDataSuccess: state.weather.success,
    weatherData: state.weather.data,
  };
}

Search.propTypes = {
  getCurrentLocationError: PropTypes.func.isRequired,
  getCurrentLocationStart: PropTypes.func.isRequired,
  getCurrentLocationSuccess: PropTypes.func.isRequired,
  getWeatherData: PropTypes.func.isRequired,
  weatherData: PropTypes.object,
  getWeatherDataCoord: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default connect(mapStateToProps, {
  getCurrentLocationError,
  getCurrentLocationStart,
  getCurrentLocationSuccess,
})(Search);
