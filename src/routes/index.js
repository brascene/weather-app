import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import SearchLocation from "../containers/SearchContainer";

class Routes extends Component {
  render() {
    const { location } = this.props;

    return (
      <Switch location={location}>
        <Route exact path="/" component={SearchLocation} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
