import styled from 'styled-components';

export const ButtonContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 20px;
  margin-top: 20px;

  button {
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    :hover {
      filter: brightness(85%);
    }
    :active {
      filter: brightness(70%);
    }
  }

  #cancel-button {
    outline: 1px solid lightskyblue;
    background-color: #1f222a;
    color: lightskyblue;
  }

  #submit-button {
    background-color: lightskyblue;
    color: #1f222a;
  }
`;
