import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Container from './components/Container/Container';
import Main from './components/Main';
// import LeftBar from './components/LeftBar';
import Menu from './components/Menu';
import Balance from './components/Balance';
import Rate from './components/Rate';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Menu />
                <Balance />
                <Main />
              </>
            }
          />

          <Route
            exact
            path="/rate"
            element={
              <>
                <Menu />
                <Rate />
              </>
            }
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
