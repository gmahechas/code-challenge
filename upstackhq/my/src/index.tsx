import React from 'react';
import ReactDOM from 'react-dom/client';
import Core from './core/containers/Core';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Core />
  </React.StrictMode>
);