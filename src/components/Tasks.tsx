import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { auth, db } from '../../firebase';
import { TaskItem } from './TaskItem';

interface Task {
  title: string;
  priority: 'low' | 'medium' | 'high';
  date: string;
  id: string;
}

function Tasks() {
  const [user] = useAuthState(auth);
  const { filter } = useParams();
  const [tasks, setTasks] = useState<Task[]>([]);
  const filteredTasks = filterTasks(tasks, filter);

  useEffect(() => {
    if (!user) return;

    const projectsRef = collection(db, 'todos');
    const q = query(projectsRef, where('uid', '==', user.uid));

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
  }, [user]);

  function filterTasks(tasks: Task[], filter?: string) {
    switch (filter) {
      case 'today': {
        const today = new Date();

        return tasks.filter((task) => {
          const date = new Date(task.date);

          return (
            today.getDate() === date.getDate() &&
            today.getMonth() === date.getMonth() &&
            today.getFullYear() === date.getFullYear()
          );
        });
      }

      case 'week': {
        const currentDate = new Date();
        const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;

        return tasks.filter((task) => {
          const date = new Date(task.date);

          return (
            date.getTime() < currentDate.getTime() + oneWeekInMs &&
            date.getTime() >= currentDate.getTime()
          );
        });
      }

      default:
        return tasks;
    }
  }

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

  return (
    <Container>
      <h2>Tasks</h2>
      <LineBreak />

      {filteredTasks.map((task) => (
        <TaskItem key={task.id} color={getColor(task.priority)}>
          {task.title}
          <div className="date">{task.date}</div>
        </TaskItem>
      ))}
    </Container>
  );
}

export default Tasks;

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
