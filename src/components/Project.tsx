import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { auth, db } from '../../firebase';
import AddTask from './AddTask';
import Dialog from './Dialog';

interface Task {
  title: string;
  priority: 'low' | 'medium' | 'high';
  date: Date;
  id: string;
}

function Project() {
  const { id } = useParams();
  const addTaskDialogRef = useRef<HTMLDialogElement>(null);
  const [opened, setOpened] = useState(false);
  const [user] = useAuthState(auth);
  const [tasks, setTasks] = useState<Task[]>([]);

  const closeDialog = () => {
    addTaskDialogRef.current?.close();
    setOpened(false);
  };

  const openAddTaskDialog = () => {
    setOpened(true);
    addTaskDialogRef.current?.showModal();
  };

  useEffect(() => {
    if (!user || !id) return;

    const projectsRef = collection(db, 'todos');
    const q = query(projectsRef, where('pid', '==', id));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tasks: Task[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        tasks.push({
          id: doc.id,
          title: data.title,
          priority: data.priority,
          date: data.date,
        });
      });

      setTasks(tasks);
    });

    return () => unsubscribe();
  }, [user, id]);

  return (
    <Container>
      <h2>Tasks</h2>
      <LineBreak />

      {tasks.map((task) => (
        <p>{task.title}</p>
      ))}

      <AddTaskButton onClick={openAddTaskDialog}>Add Task+</AddTaskButton>

      <Dialog dialogRef={addTaskDialogRef} closeDialog={closeDialog}>
        <AddTask closeDialog={closeDialog} opened={opened} pid={id} />
      </Dialog>
    </Container>
  );
}

export default Project;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 auto;
  margin-top: 60px;
  width: clamp(300px, 800px, 1100px);
`;

const LineBreak = styled.hr`
  color: #bdbdbd8d;
  width: 100%;
`;

const AddTaskButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  text-decoration: underline;
  background-color: #272a34;
  outline: 1px solid #34373f;
  margin: 0 auto;
  margin-top: 20px;

  :hover {
    cursor: pointer;
    color: lightskyblue;
  }
`;
