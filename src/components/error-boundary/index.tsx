import React from 'react';

export class ErrorBoundary extends React.Component<{
  children: React.ReactNode;
}, {
  error: string;
}> {
  public errorInfo: string;

  constructor(props: {
    children: React.ReactNode;
  }) {
    super(props);
    this.errorInfo = '';
  }

  componentDidCatch(error?: Error) {
    console.log('Boundary Error', error);
    this.errorInfo = `${error?.name ?? ''}: ${error?.message ?? ''}`;
  }

  render() {
    const { errorInfo } = this;
    const { children } = this.props;
    if (errorInfo) {
      return (
        <div className="error-component" title="page render error" data-details={`${errorInfo}`} />
      );
    }

    return children;
  }
}
