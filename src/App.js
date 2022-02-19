import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './views/loginView';
import Register from './views/registerView';
import Current from './views/currentViews';
import { usersOperations } from './redux/users';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route>
          <Route exact path="/" element={<Navigate to="/current" />} />
          <Route exact path="/login" redirectTo="/current" element={<Login />} />
          <Route exact path="/register" redirectTo="/current" element={<Register />} />
          <Route
            exact
            path="current/*"
            element={
              <PrivateRoute redirectTo="/login">
                <Current />
              </PrivateRoute>
            }
          ></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
