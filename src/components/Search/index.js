import React from "react";
import { Input, Label, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.css";

import {
  getCurrentLocationSuccess,
  getCurrentLocationError,
  getCurrentLocationStart
} from "../../redux/actions";

class Search extends React.Component {
  state = {
    getMyLocationLoader: false
  };

  _handleGetMyLocation = () => {
    this.setState({ getMyLocationLoader: true });
    this.props.getCurrentLocationStart();
    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      const success = pos => {
        var crd = pos.coords;
        this.props.getCurrentLocationSuccess({
          latitude: crd.latitude,
          longitude: crd.longitude
        });
        this.setState({ getMyLocationLoader: false });
        this.props.history.push("/result");     
      };

      const error = err => {
        this.props.getCurrentLocationError({
          code: err.code,
          message: err.message
        });
        this.setState({ getMyLocationLoader: false });        
      };

      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  _handleSearchByCity = () => {
    // this.props.history.push("/result");
    this.props.getWeatherData();
  };

  render() {
    const { getMyLocationLoader } = this.state;
    return (
      <div id="container">
        <div id="left" />
        <div id="center">
          <div style={{ height: 90 }} />
          <div className="search-container">
            <div style={{ height: 260 }} />
            <Input
              className="search"
              style={{ width: "70%", minWidth: 300 }}
              icon="search"
              placeholder="Enter the city name visea"
              size="big"
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
                  backgroundColor: "white",
                  fontSize: 16,
                  fontWeight: "200"
                }}
              >
                or
              </Label>{" "}
              <br />
              <Button
                style={{ backgroundColor: "white" }}
                loading={getMyLocationLoader}
                content="use my current location"
                onClick={this._handleGetMyLocation}
                basic
                color="purple"
              />
            </div>
          </div>
        </div>
        <div id="right" />
      </div>
    );
  }
}

Search.propTypes = {
  getCurrentLocationError: PropTypes.func,
  getCurrentLocationStart: PropTypes.func,
  getCurrentLocationSuccess: PropTypes.func
};

export default connect(null, {
  getCurrentLocationError,
  getCurrentLocationStart,
  getCurrentLocationSuccess
})(Search);
