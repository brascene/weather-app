import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";

import reducer from "./reducers";
// import rootSaga from './sagas'

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

// const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(historyMiddleware))
);
// sagaMiddleware.run(rootSaga)

export default store;
