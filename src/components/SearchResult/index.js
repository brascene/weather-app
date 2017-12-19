import React from 'react';
import { Button, Icon, Label, Checkbox, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';

import SingleDay from './DayData';
import CurrentDay from './CurrentData';
import { week, month } from '../../utils';

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
    const { celsius } = this.state;
    this.setState({ celsius: !celsius });
  };

  fistLetterCapital = word => word.charAt(0).toUpperCase() + word.slice(1);

  render() {
    const weatherData =
      this.props.weatherData !== null
        ? this.props.weatherData
        : this.state.savedData;
    const title = this.getTitle(weatherData);
    const { celsius } = this.state;
    return (
      <div
        className="ui container center"
        style={{ width: '70%', paddingTop: 70 }}
      >
        <div className="search-container">
          <div style={{ width: '100%' }}>
            <Grid>
              <Grid.Column floated="left">
                <Button
                  style={{ backgroundColor: 'white', fontSize: 25 }}
                  onClick={() => {
                    this.props.history.goBack();
                  }}
                  icon
                  labelPosition="left"
                >
                  {weatherData.city.name}
                  <Icon name="left arrow" className="backIcon" />
                </Button>
              </Grid.Column>
              <Grid.Column width={4} floated="right">
                <Label className="switchLabel" style={{ backgroundColor: "white", marginTop: 20 }}>Switch (°C) - (°F)</Label>
                <Checkbox
                  className="checkbox"
                  onChange={this.handleToogle}
                  toggle
                  style={{ paddingTop: 0 }}
                />
              </Grid.Column>
            </Grid>
          </div>

          <div className="containerLeftTitle">
            <Label style={{ fontSize: 30, fontWeight: 'light', backgroundColor: 'white' }}>{title}</Label> <br />
            <Label style={{ fontSize: 25, backgroundColor: 'white' }}>
              {this.fistLetterCapital(weatherData.list[0].weather[0].description)}
            </Label>
          </div>

          <div style={{ height: 260, paddingTop: 0, paddingLeft: 70 }}>
            <CurrentDay
              celsius={celsius}
              iconCode={weatherData.list[0].weather[0].icon}
              temp={weatherData.list[0].temp}
            />
          </div>

          <div
            className="ui container center"
            style={{ width: '100%', paddingLeft: 30, paddingTop: 0 }}
          >
            <Grid container columns={7} centered doubling>
              {weatherData.list.map(m => (
                <SingleDay
                  key={m.dt}
                  day={m.dt}
                  iconCode={m.weather[0].icon}
                  temp={m.temp.day}
                />
              ))}
            </Grid>
            <div style={{ height: 50 }} />
          </div>
        </div>
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
