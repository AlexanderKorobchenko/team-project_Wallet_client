import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Container from './components/Container/Container';
import Body from './components/Body';
import Rate from './components/Rate';
import Navigation from './components/Navigation';
import NotFoundView from './views/NotFoundView';

// import s from "./App.module.css";

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
                <Body />
                <h2>Start</h2>
              </>
            }
          />

          <Route
            path="/home"
            element={
              <>
                <Body />
                <h2>Home</h2>
              </>
            }
          />

          <Route
            path="/diagram"
            element={
              <>
                <Body />
                <h2>Diagram</h2>
              </>
            }
          />

          <Route
            path="/rate"
            element={
              <>
                <Navigation />
                <Rate />
                <h2>Rate</h2>
              </>
            }
          />

          <Route
            path="*"
            element={
              <>
                <Navigation />
                <NotFoundView />
              </>
            }
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

// <Router>
//   <Container>
//     <Routes>
//       <Route exact path="/" element={
//           <>
//             <Navigation />
//             {/* <Balance />
//             <Main /> */}
//           </>
//         }
//       />

//       <Route exact path="/rate" element={
//           <>
//             <Navigation />
//             {/* <Rate /> */}
//           </>
//         }
//       />
//     </Routes>
//   </Container>
// </Router>
