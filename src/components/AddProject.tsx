import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonContainer } from './ButtonContainer';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

interface Props {
  closeDialog: () => void;
  opened: boolean;
}

function AddProject({ closeDialog, opened }: Props) {
  const { register, handleSubmit, reset } = useForm<{ name: string }>();
  const [user] = useAuthState(auth);

  const addNewProject = handleSubmit((data) => {
    handleClose();

    if (!user) return;

    try {
      addDoc(collection(db, 'projects'), {
        ...data,
        uid: user.uid,
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  });

  const handleClose = () => {
    closeDialog();
  };

  useEffect(() => {
    reset();
  }, [opened]);

  return (
    <form
      method="dialog"
      onClick={(e) => e.stopPropagation()}
      onSubmit={addNewProject}
    >
      <h2>Add New Project</h2>

      <label htmlFor="name">Name:</label>
      <input type="text" required {...register('name')} />

      <ButtonContainer>
        <button type="button" id="cancel-button" onClick={handleClose}>
          Cancel
        </button>
        <button type="submit" id="submit-button">
          Submit
        </button>
      </ButtonContainer>
    </form>
  );
}

export default AddProject;
