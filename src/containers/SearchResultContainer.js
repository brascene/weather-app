import React, { Component } from "react";

import SearchResult from "../components/SearchResult";

class SearchResultContainer extends Component {
  render() {
    return (
      <div>
        <SearchResult {...this.props} />
      </div>
    );
  }
}

export default SearchResultContainer;
