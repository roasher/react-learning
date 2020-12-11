import React from 'react';

class ErrorBoundaryView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    super.componentDidCatch(error, errorInfo);
    this.setState({ isError: true });
  }

  render() {
    if (this.state.isError) {
      return <h1>Error</h1>;
    }
    return this.props.children;
  }
}

export const ErrorBoundary = ErrorBoundaryView;
