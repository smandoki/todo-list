import React from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Tasks from './components/Tasks';
import Layout from './components/Layout';
import Project from './components/Project';
import AuthGuard from './guards/AuthGuard';
import UnAuthGuard from './guards/UnAuthGuard';

function App() {
  return (
    <StyledApp>
      <HashRouter>
        <Routes>
          <Route
            path="login"
            element={<UnAuthGuard component={<Login />} redirect="/all" />}
          />
          <Route
            path="/"
            element={<AuthGuard component={<Layout />} redirect="/login" />}
          >
            <Route path="/:filter" element={<Tasks />} />
            <Route path="project/:id" element={<Project />} />
          </Route>
        </Routes>
      </HashRouter>
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
