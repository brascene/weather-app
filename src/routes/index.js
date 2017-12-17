import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";

import SearchLocation from "../containers/SearchContainer";
import SearchResultContainer from "../containers/SearchResultContainer";
import store from "../redux";

const history = createHistory();

class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={SearchLocation} />
            <Route exact path="/result" component={SearchResultContainer} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Routes;
