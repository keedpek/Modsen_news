import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import AppRouter from './utils/Router/AppRouter';
import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
`;

const ContentContainer = styled.div`
flex: 1;
`

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <ContentContainer>
          <AppRouter />
        </ContentContainer>
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
