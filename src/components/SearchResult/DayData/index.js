import React from 'react';
import { Image, Label } from 'semantic-ui-react';
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
    <div className="singleDay">
      <Label style={{ backgroundColor: 'yellow' }}>{currentDayDisplay}</Label>
      <Image className="dayIcon" src={wIcons[iconCode]} size="tiny" />
      <Label style={{ backgroundColor: 'yellow' }}>{temp} F</Label>
    </div>
  );
};

DayData.propTypes = {
  day: PropTypes.number.isRequired,
  iconCode: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
};

export default DayData;
