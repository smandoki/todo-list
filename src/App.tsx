import React from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Tasks from './components/Tasks';
import Layout from './components/Layout';
import Project from './components/Project';

function App() {
  const [user] = useAuthState(auth);

  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/:filter" element={<Tasks />} />
            <Route path="project/:id" element={<Project />} />
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
