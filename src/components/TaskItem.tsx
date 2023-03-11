import styled from 'styled-components';

export const TaskItem = styled.div`
  margin-top: 20px;
  background-color: #34373f;
  padding: 20px;
  border-left: 4px solid;
  border-color: ${(props) => props.color};
  display: flex;
  gap: 12px;

  i:hover {
    cursor: pointer;
  }

  i:active {
    transform: scale(115%);
  }

  .bi-pencil-square:hover {
    color: lightskyblue;
  }

  .bi-trash3:hover {
    color: lightcoral;
  }

  .date {
    margin-left: auto;
    margin-right: 12px;
  }
`;
