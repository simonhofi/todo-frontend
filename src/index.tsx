import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element. Please make sure the element with id "root" exists in your HTML.');
}
