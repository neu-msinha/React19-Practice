import React from 'react';
import {createRoot} from 'react-dom/client';
import Header from './components/header/header';
import StatePlayground from './components/playground/state';
import './styles/styles.css';

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <StatePlayground />
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);