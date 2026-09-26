import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: '#FFF5F5',
          color: '#9B1C1C',
          padding: '32px',
          zIndex: 999999,
          overflow: 'auto',
          fontFamily: 'monospace'
        }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>
            ⚠️ Render Error Caught by ErrorBoundary
          </h1>
          <p style={{ fontSize: '16px', fontWeight: 'bold', background: '#FED7D7', padding: '12px', borderRadius: '8px' }}>
            {this.state.error?.toString()}
          </p>
          <h3 style={{ marginTop: '24px', fontSize: '14px', textTransform: 'uppercase', color: '#742A2A' }}>
            Stack Trace:
          </h3>
          <pre style={{ background: '#FFFFFF', padding: '16px', borderRadius: '8px', border: '1px solid #FEB2B2', marginTop: '8px', overflow: 'auto', fontSize: '12px' }}>
            {this.state.error?.stack}
          </pre>
          <h3 style={{ marginTop: '24px', fontSize: '14px', textTransform: 'uppercase', color: '#742A2A' }}>
            Component Stack:
          </h3>
          <pre style={{ background: '#FFFFFF', padding: '16px', borderRadius: '8px', border: '1px solid #FEB2B2', marginTop: '8px', overflow: 'auto', fontSize: '12px' }}>
            {this.state.errorInfo?.componentStack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
