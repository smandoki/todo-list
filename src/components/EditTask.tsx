import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonContainer } from './ButtonContainer';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

interface Task {
  title: string;
  priority: 'low' | 'medium' | 'high';
  date: string;
  id: string;
}

interface Props {
  closeDialog: () => void;
  task: Task;
  opened: boolean;
}

function EditTask({ closeDialog, task, opened }: Props) {
  const { register, handleSubmit, reset } = useForm<Partial<Task>>();
  const [user] = useAuthState(auth);

  const onSubmit = handleSubmit((data) => {
    handleClose();

    if (!user) return;

    try {
      updateDoc(doc(db, `todos`, task.id), {
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
    reset({ ...task });
  }, [opened]);

  return (
    <form
      method="dialog"
      onClick={(e) => e.stopPropagation()}
      onSubmit={onSubmit}
    >
      <h2>Edit Project</h2>

      <label htmlFor="name">Name:</label>
      <input type="text" required {...register('title')} />

      <label htmlFor="name">Priority:</label>
      <select required {...register('priority')}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <label htmlFor="date">Due Date:</label>
      <input type="date" required {...register('date')} />

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

export default EditTask;
