import "./App.css";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
const Fetch = React.lazy(() => import("./components/Fetch"));

function App() {
  return (
    <div>
      <ErrorBoundary fallback={<div>Error Ocurred</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Fetch />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
