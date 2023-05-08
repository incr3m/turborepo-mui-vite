import * as React from 'react';
import './App.css';
import { Version } from 'ui';

function App() {
  return (
    <div className="container">
      <h1 className="title">
        Admin <br />
        <span>Kitchen Sink</span>
      </h1>
      <Version version="test11" />
      <p className="description">
        Built With{' '}
        {/* <NewTabLink href="https://turbo.build/repo">Turborepo</NewTabLink> +{" "}
        <NewTabLink href="https://vitejs.dev/">Vite</NewTabLink> */}
      </p>
    </div>
  );
}

export default App;
