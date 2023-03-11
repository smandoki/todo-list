import React from 'react';
import styled from 'styled-components';

function Dialog({
  children,
  dialogRef,
  closeDialog,
}: {
  children: React.ReactNode;
  dialogRef: React.RefObject<HTMLDialogElement>;
  closeDialog: () => void;
}) {
  return (
    <StyledDialog ref={dialogRef} onClick={closeDialog}>
      {children}
    </StyledDialog>
  );
}

export default Dialog;

const StyledDialog = styled.dialog`
  padding: 0;
  position: fixed;
  inset: 50% 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: white;
  border: none;
  border-radius: 4px;
  background-color: #1f222a;

  ::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }

  h2 {
    margin-bottom: 20px;
  }

  input {
    margin-top: 4px;
    margin-bottom: 20px;
    padding: 8px;
    color: black;
    border-radius: 4px;
    border: none;
  }

  form {
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    width: 300px;
  }
`;
