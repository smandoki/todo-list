import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonContainer } from './ButtonContainer';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

interface Props {
  closeDialog: () => void;
  opened: boolean;
  pid: string | undefined;
}

interface TaskFormInput {
  title: string;
  priority: 'low' | 'medium' | 'high';
  date: Date;
}

function AddTask({ closeDialog, opened, pid }: Props) {
  const { register, handleSubmit, reset } = useForm<TaskFormInput>();
  const [user] = useAuthState(auth);

  const addNewTask = handleSubmit((data) => {
    handleClose();

    if (!user || !pid) return;

    try {
      addDoc(collection(db, 'todos'), {
        uid: user.uid,
        pid,
        title: data.title,
        priority: data.priority,
        date: data.date,
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
      onSubmit={addNewTask}
    >
      <h2>Add New Task</h2>

      <label htmlFor="title">Title:</label>
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

export default AddTask;
