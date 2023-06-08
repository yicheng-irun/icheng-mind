import { ErrorBoundary } from './components/error-boundary';
import { Helmet } from 'react-helmet-async';

export function App ({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
      <Helmet>
        <title> icheng-mind </title>
      </Helmet>
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </>
  );
}
