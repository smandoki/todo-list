import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonContainer } from './ButtonContainer';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

interface Project {
  id: string;
  name: string;
}

interface Props {
  closeDialog: () => void;
  project: Project;
  opened: boolean;
}

function EditProject({ closeDialog, project, opened }: Props) {
  const { register, handleSubmit, reset } = useForm<{ name: string }>();
  const [user] = useAuthState(auth);

  const onSubmit = handleSubmit((data) => {
    handleClose();

    if (!user) return;

    try {
      updateDoc(doc(db, `projects`, project.id), {
        ...data,
      });
    } catch (e) {
      console.error('Error updating document: ', e);
    }
  });

  const handleClose = () => {
    closeDialog();
  };

  useEffect(() => {
    reset({ ...project });
  }, [opened]);

  return (
    <form
      method="dialog"
      onClick={(e) => e.stopPropagation()}
      onSubmit={onSubmit}
    >
      <h2>Edit Project</h2>

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

export default EditProject;
