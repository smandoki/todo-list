import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Projects from './Projects';

function Aside() {
  return (
    <StyledAside>
      <StyledLink to="all">
        <i className="bi bi-calendar3"></i>
        All
      </StyledLink>

      <StyledLink to="today">
        <i className="bi bi-calendar3"></i>
        Today
      </StyledLink>

      <StyledLink to="week">
        <i className="bi bi-calendar4-week"></i>
        Week
      </StyledLink>

      <Projects />
    </StyledAside>
  );
}

export default Aside;

const StyledAside = styled.aside`
  background-color: #22252e;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledLink = styled(Link)`
  background-color: #34373f;
  padding: 12px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  text-decoration: none;

  :hover {
    filter: brightness(85%);
  }

  :active {
    filter: brightness(70%);
  }
`;
