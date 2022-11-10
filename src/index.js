import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { ParallaxProvider } from 'react-scroll-parallax';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>
);

