import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Para = () => <p>This is my para</p>;

root.render(
  <React.StrictMode>
    <Para />
  </React.StrictMode>
);
