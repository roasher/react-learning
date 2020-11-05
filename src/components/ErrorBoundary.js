import React from 'react'

class ErrorBoundaryView extends React.Component {
  state = {
    isError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({isError: true})
  }

  render() {
    if (this.state.isError) {
      return <h1>Error</h1>
    }
    return this.props.children;
  }
}

export const ErrorBoundary = ErrorBoundaryView;