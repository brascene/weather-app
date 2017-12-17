import React, { Component } from "react";

import Search from "../components/Search";

class SearchContainer extends Component {
  render() {
    return (
      <div>
        <Search {...this.props} />
      </div>
    );
  }
}

export default SearchContainer;
