'use client';
import React from 'react';

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback: React.ReactElement;
};

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logErrorToService(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

function logErrorToService(error: Error, errorInfo: React.ErrorInfo) {
  console.error(error, errorInfo);
}

export default ErrorBoundary;
