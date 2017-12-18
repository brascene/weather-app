import React from 'react';
import { Button, Icon, Label, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';

import SingleDay from './DayData';
import CurrentDay from './CurrentData';
import { week, month } from '../../utils';
// import mockData from '../../mocks/weatherMock';

class SearchResult extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    savedData: {},
    celsius: false,
  };
  componentWillMount() {
    const savedData = localStorage.getItem('weather_data');
    const savedJson = JSON.parse(savedData);
    if (savedJson !== {} && this.props.weatherData === null) {
      this.setState({ savedData: savedJson });
    }
  }

  getTitle = (data) => {
    const firstDate = data.list[0].dt;
    const realDate = new Date(firstDate * 1000);
    const currentDay = week[realDate.getUTCDay()];
    const currentMonth = month[realDate.getUTCMonth()];
    const currentDayInMonth = realDate.getUTCDate();
    const currentYear = realDate.getUTCFullYear();
    return `${currentDay}, ${currentMonth} ${currentDayInMonth}th ${currentYear}`;
  };

  handleToogle = () => {
    console.log('Changed again');
    const { celsius } = this.state;
    this.setState({ celsius: !celsius });
  };

  render() {
    const weatherData =
      this.props.weatherData !== null
        ? this.props.weatherData
        : this.state.savedData;
    const title = this.getTitle(weatherData);
    const { celsius } = this.state;
    return (
      <div id="container">
        <div id="left" />
        <div id="center">
          <div style={{ height: 90 }} />
          <div className="search-container">
            <div style={{ height: 50 }}>
              <Button
                onClick={() => {
                  this.props.history.goBack();
                }}
                icon
                labelPosition="left"
              >
                Back
                <Icon name="left arrow" />
              </Button>
              <Label>{weatherData.city.name}</Label>
            </div>
            <div style={{ height: 30 }}>
              <Label style={{ fontSize: 30 }}>{title}</Label>
              <Checkbox
                onChange={this.handleToogle}
                style={{ marginLeft: 100, marginTop: 30 }}
                toggle
              />
              <Label>Switch °F / °C</Label>
            </div>
            <div style={{ height: 260, paddingTop: 50 }}>
              <CurrentDay
                celsius={celsius}
                iconCode={weatherData.list[0].weather[0].icon}
                temp={weatherData.list[0].temp}
              />
            </div>
            <div style={{ height: 260, paddingTop: 120 }}>
              {weatherData.list.map(m => (
                <SingleDay
                  key={m.dt}
                  day={m.dt}
                  iconCode={m.weather[0].icon}
                  temp={m.temp.day}
                />
              ))}
            </div>
          </div>
        </div>
        <div id="right" />
      </div>
    );
  }
}

SearchResult.propTypes = {
  weatherData: PropTypes.object,
  history: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    weatherData: state.weather.data,
  };
}

export default connect(mapStateToProps)(SearchResult);
