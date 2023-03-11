import React from 'react';
import styled from 'styled-components';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

function Header() {
  const [user] = useAuthState(auth);

  return (
    <StyledHeader>
      <Icon className="bi bi-check2-circle" />
      <h1>Todo List</h1>
      {user && (
        <LogoutBtn to="/login" onClick={() => signOut(auth)}>
          Sign Out
        </LogoutBtn>
      )}
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  background-color: #1f222a;
  display: flex;
  padding: 12px 24px;
  gap: 10px;
  border-bottom: 1px solid #272a34;
  grid-column: 1 / 3;
`;

const Icon = styled.i`
  font-size: 2rem;
`;

const LogoutBtn = styled(Link)`
  padding: 8px 16px;
  margin-left: auto;
  background-color: #34373f;
  border: none;
  border-radius: 4px;
  text-decoration: none;

  :hover {
    filter: brightness(85%);
  }

  :active {
    filter: brightness(70%);
  }
`;
