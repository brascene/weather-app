import React from 'react';
import { Image, Label, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import wIcons from '../../../assets/weather_icons';
import { week } from '../../../utils';

import './style.css';

const DayData = (props) => {
  const { day, iconCode, temp } = props;
  const dayDate = new Date(day * 1000);
  const currentDay = dayDate.getUTCDay();
  const currentDayDisplay = week[currentDay];
  return (
    <Grid.Column centered>
      <Grid.Row>
        <Label style={{ backgroundColor: 'white' }}>{currentDayDisplay}</Label>
      </Grid.Row>
      <Grid.Row>
        <Image className="dayIcon" src={wIcons[iconCode]} size="tiny" />
      </Grid.Row>
      <Grid.Row>
        <Label style={{ backgroundColor: 'white' }}>{temp} F</Label>
      </Grid.Row>
    </Grid.Column>
  );
};

DayData.propTypes = {
  day: PropTypes.number.isRequired,
  iconCode: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
};

export default DayData;
