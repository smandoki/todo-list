import React from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import AllTasks from './components/AllTasks';
import Layout from './components/Layout';

function App() {
  const [user] = useAuthState(auth);

  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="all" element={<AllTasks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: auto 1fr;
`;
