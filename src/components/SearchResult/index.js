import React from "react";
import { Input, Label, Button } from "semantic-ui-react";
import "./style.css";

class SearchResult extends React.Component {
  state = {
    searchStarted: false
  };

  componentDidMount() {
    console.log("Props: ", this.props);
  }

  _handleGetMyLocation = () => {
    if (navigator.geolocation) {
      const loc = navigator.geolocation.getCurrentPosition((success, err) => {
        console.log("success: ", success);
        console.log("error: ", err);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  render() {
    const { searchStarted } = this.state;
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
              placeholder="Enter the city name"
              size="big"
            />
            <br />
            <br />
            <Button
              onClick={() => console.log("Search by city")}
              className="goButton"
              content="Dobrodosao na details"
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
                loading={searchStarted}
                content="use my current location"
                onClick={() => console.log("Search by location")}
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

export default SearchResult;
