import React, {  Fragment }  from 'react';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (<Fragment>
        <h1>Something went wrong.</h1>
        <p> {this.info} </p>
        </Fragment>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary
