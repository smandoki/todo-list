import React from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

import Aside from './components/Aside';
import Header from './components/Header';
import Login from './components/Login';
import Tasks from './components/Tasks';

function App() {
  const [user] = useAuthState(auth);

  return (
    <StyledApp>
      <Header />

      {user && <Aside />}
      {user && <Tasks />}
      {!user && <Login />}
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
