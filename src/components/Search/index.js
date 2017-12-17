import React from "react";
import { Input, Label, Button } from "semantic-ui-react";
import "./style.css";

const Search = () => (
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
          size="huge"
        />
        <div style={{ height: 260 }}>
          <br />
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
            onClick={() => console.log("Search by location")}
            style={{ backgroundColor: "white" }}
            content="use my current location"
          />
        </div>
      </div>
    </div>
    <div id="right" />
  </div>
);

export default Search;
