import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProfileCard from './ProfileCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ProfileCard/>
  </React.StrictMode>
);


