import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import en from './translations/en/translation.json';
import dk from './translations/dk/translation.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'dk',
  resources: {
    dk: {
      translation: dk,
    },
    en: {
      translation: en,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
); 

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </React.StrictMode>
);

export const LANGUAGES = [
  { label: "Danish", code: "dk" },
  { label: "English", code: "en" },
];