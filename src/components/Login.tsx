import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <StyledLogin>
      <h2>Sign In</h2>
      <LoginBtn>Continue as guest</LoginBtn>

      <LineBreak>
        <hr />
        or
        <hr />
      </LineBreak>

      <LoginBtn>
        <i className="bi bi-google"></i>
        Sign in with Google
      </LoginBtn>
    </StyledLogin>
  );
}

export default Login;

const StyledLogin = styled.div`
  grid-column: 1 / 3;
  background-color: #1f222a;
  min-width: 300px;
  height: 200px;
  margin: 100px auto;
  border-radius: 4px;
  padding: 40px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  text-align: center;
`;

const LoginBtn = styled.button`
  padding: 16px 32px;
  background-color: #34373f;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;

  i {
    margin-right: 10px;
  }

  :hover {
    filter: brightness(85%);
  }

  :active {
    filter: brightness(70%);
  }
`;

const LineBreak = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  hr {
    color: #2f313e;
    height: 0;
    flex-grow: 1;
  }
`;
