import React from 'react';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';
import LifecycleUpdate from './components/LifecycleUpdate';
import LifecycleUnmount from './components/LifecycleUnmount';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Exercise 1: Error Boundaries</h1>

      <h3>Simulation 1 (shared ErrorBoundary)</h3>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <h3>Simulation 2 (separate ErrorBoundaries)</h3>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>

      <h3>Simulation 3 (no ErrorBoundary)</h3>
      <BuggyCounter />

      <hr />

      <h1>Exercise 2: Lifecycle - Update</h1>
      <LifecycleUpdate />

      <hr />

      <h1>Exercise 3: Lifecycle - Unmount</h1>
      <LifecycleUnmount />
    </div>
  );
}

export default App;
