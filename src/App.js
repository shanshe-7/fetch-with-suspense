import "./App.css";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Character from "./components/Character";

function App() {
  return (
    <div>
      <ErrorBoundary fallback={<div>Error Ocurred</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Character />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
