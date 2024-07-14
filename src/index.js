import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import NewsStore from './store/NewsStore';

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

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={
      {
        news: new NewsStore(),
      }
    }>
      <Global />
      <App />
    </Context.Provider>
  </React.StrictMode>,
);
