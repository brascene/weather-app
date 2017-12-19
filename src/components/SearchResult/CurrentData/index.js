import React from 'react';
import { Image, List, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import wIcons from '../../../assets/weather_icons';

import './style.css';

const CurrentData = (props) => {
  const { temp, iconCode } = props;

  return (
    <div className="leftContainer" style={{ width: '70%' }}>
      <Grid columns="equal">
        <Grid.Column only="computer" width={8}>
          <List style={{ paddingTop: 80, color: '#dd8270', fontSize: 100 }}>
            <List.Content>{temp.day} F </List.Content>
          </List>
        </Grid.Column>
        <Grid.Column>
          <Image className="dayIcon" src={wIcons[iconCode]} size="medium" />
        </Grid.Column>
        <Grid.Column only="computer" style={{ backgroundColor: 'white' }}>
          <List verticalAlign style={{ paddingTop: 50, color: '#dd8270' }}>
            <List.Item>
              <List.Content floated="right">{temp.morn} </List.Content>
              <List.Content floated="left">Morning</List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated="right">{temp.day} </List.Content>
              <List.Content floated="left">Day</List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated="right">{temp.eve} </List.Content>
              <List.Content floated="left">Evening</List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated="right">{temp.night} </List.Content>
              <List.Content floated="left">Night</List.Content>
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </div>
  );
};

CurrentData.propTypes = {
  temp: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types,
  iconCode: PropTypes.string.isRequired,
};

export default CurrentData;
