import React from 'react';
import { Image, Label, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import wIcons from '../../../assets/weather_icons';

import './style.css';

const CurrentData = (props) => {
  const { temp, iconCode } = props;

  return (
    <div className="currentDay">
      <div className="currentDaySingle">
        <Label style={{ fontSize: 50 }}>{temp.day} F</Label>
      </div>
      <div className="currentDaySingle">
        <Image className="dayIcon" src={wIcons[iconCode]} size="medium" />
      </div>
      <div className="currentDaySingle">
        <div style={{ height: 60 }} />
        <List>
          <List.Item>Morning {temp.morn} </List.Item>
          <List.Item>Day {temp.day} </List.Item>
          <List.Item>Evening {temp.eve} </List.Item>
          <List.Item>Night {temp.night} </List.Item>
        </List>
        <div style={{ height: 50 }} />
      </div>
    </div>
  );
};

CurrentData.propTypes = {
  temp: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types,
  iconCode: PropTypes.string.isRequired,
};

export default CurrentData;
