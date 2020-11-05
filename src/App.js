import React from 'react';
import {ErrorBoundary} from "./components/ErrorBoundary";
import withWindowSize from "./hoc/withWindowSize";
import {Layout} from "./components/common/layout";


class App extends React.Component {

  state = {}

  render() {
    return (
      <ErrorBoundary>
          <Layout>
            content
          </Layout>
      </ErrorBoundary>
    );
  }
}

export default withWindowSize(App);
