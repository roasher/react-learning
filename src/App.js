import React from "react";
import {ErrorBoundary} from "./components/ErrorBoundary";
import {AppRouter} from "./app-router";

export const App = () => (
  <ErrorBoundary>
    <AppRouter/>
  </ErrorBoundary>
)