import React from "react";
import {ErrorBoundary} from "./components/ErrorBoundary";
import {AppRouter} from "./app-router";
import {Provider} from "react-redux";
import {configureStore} from "./store/configure-store";


const store = configureStore();

export const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  </ErrorBoundary>
)