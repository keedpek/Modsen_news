import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './utils/Router/AppRouter';
import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
