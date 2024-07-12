import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Lexend Deca', sans-serif;
}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
);
