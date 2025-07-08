import React from 'react';
import {createRoot} from 'react-dom/client';
import Header from './components/header';
import './styles/styles.css';

const App = () => {
  return (
    <>
      <Header />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);