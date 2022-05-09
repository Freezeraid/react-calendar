import React from 'react';
import ReactDOM from 'react-dom/client';
import { MonthContextProvider } from './Context/MonthContext';
import { ModalContextProvider } from './Context/ModalContext';
import { ThemeContextProvider } from './Context/ThemeContext';
import { CalendarDataContextProvider } from './Context/CalendarDataContext';
import { CookiesProvider } from 'react-cookie';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <MonthContextProvider>
        <ModalContextProvider>
          <ThemeContextProvider>
            <CalendarDataContextProvider>
              <App />
            </CalendarDataContextProvider>
          </ThemeContextProvider>
        </ModalContextProvider>
      </MonthContextProvider>
    </CookiesProvider>
  </React.StrictMode>
);
