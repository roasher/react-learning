import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {loggerMiddleware} from "./middleware";

export const configureStore = () => {
  const composeEnc = composeWithDevTools({
    trace: true,
    traceLimit: 25
  })

  return createStore(rootReducer, composeEnc(applyMiddleware(thunk, loggerMiddleware)))
}