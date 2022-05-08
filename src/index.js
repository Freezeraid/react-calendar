import React from 'react';
import ReactDOM from 'react-dom/client';
import { MonthContextProvider } from './Context/MonthContext';
import { ModalContextProvider } from './Context/ModalContext';
import { ThemeContextProvider } from './Context/ThemeContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MonthContextProvider>
      <ModalContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </ModalContextProvider>
    </MonthContextProvider>
  </React.StrictMode>
);
