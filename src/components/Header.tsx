import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <StyledHeader>
      <Icon className="bi bi-check2-circle" />
      <h1>Todo List</h1>
      <LogoutBtn>Sign Out</LogoutBtn>
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

const LogoutBtn = styled.button`
  padding: 8px 16px;
  margin-left: auto;
  background-color: #34373f;
  border: none;
  border-radius: 4px;

  :hover {
    filter: brightness(85%);
  }

  :active {
    filter: brightness(70%);
  }
`;
