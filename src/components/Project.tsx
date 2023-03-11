import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { auth, db } from '../../firebase';
import AddTask from './AddTask';
import Dialog from './Dialog';
import EditTask from './EditTask';
import { TaskItem } from './TaskItem';

interface Task {
  title: string;
  priority: 'low' | 'medium' | 'high';
  date: string;
  id: string;
}

function Project() {
  const { id } = useParams();
  const addTaskDialogRef = useRef<HTMLDialogElement>(null);
  const editTaskDialogRef = useRef<HTMLDialogElement>(null);
  const [opened, setOpened] = useState(false);
  const [user] = useAuthState(auth);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<Task>({
    title: '',
    priority: 'low',
    date: '',
    id: '',
  });

  const closeDialog = () => {
    addTaskDialogRef.current?.close();
    editTaskDialogRef.current?.close();
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

  const getColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'lightcoral';
      case 'medium':
        return 'lightsalmon';
      default:
        return 'lightgreen';
    }
  };

  const deleteTask = (id: string) => {
    try {
      deleteDoc(doc(db, 'todos', id));
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const openEditTaskDialog = (task: Task) => {
    setOpened(true);
    setTaskToEdit({ ...task });
    editTaskDialogRef.current?.showModal();
  };

  return (
    <Container>
      <h2>Tasks</h2>
      <LineBreak />

      {tasks.map((task) => (
        <TaskItem color={getColor(task.priority)}>
          {task.title}
          <div className="date">{task.date}</div>
          <i
            className="bi bi-pencil-square"
            onClick={() => openEditTaskDialog(task)}
          ></i>
          <i className="bi bi-trash3" onClick={() => deleteTask(task.id)}></i>
        </TaskItem>
      ))}

      <AddTaskButton onClick={openAddTaskDialog}>Add Task+</AddTaskButton>

      <Dialog dialogRef={addTaskDialogRef} closeDialog={closeDialog}>
        <AddTask closeDialog={closeDialog} opened={opened} pid={id} />
      </Dialog>

      <Dialog dialogRef={editTaskDialogRef} closeDialog={closeDialog}>
        <EditTask closeDialog={closeDialog} task={taskToEdit} opened={opened} />
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
