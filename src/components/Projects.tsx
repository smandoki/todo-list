import React, { useEffect, useState, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import { auth, db } from '../../firebase';
import {
  collection,
  query,
  where,
  onSnapshot,
  deleteDoc,
  doc,
} from 'firebase/firestore';

import Dialog from './Dialog';
import AddProject from './AddProject';
import EditProject from './EditProject';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  name: string;
}

function Projects() {
  const [user] = useAuthState(auth);
  const [projects, setProjects] = useState<Project[]>([]);
  const addProjectDialogRef = useRef<HTMLDialogElement>(null);
  const editProjectDialogRef = useRef<HTMLDialogElement>(null);
  const [projectToEdit, setProjectToEdit] = useState<Project>({
    id: '',
    name: '',
  });
  const [opened, setOpened] = useState(false);

  //load projects from firestore on user login
  useEffect(() => {
    if (!user) return;

    const projectsRef = collection(db, 'projects');
    const q = query(projectsRef, where('uid', '==', user.uid));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const projects: Project[] = [];

      querySnapshot.forEach((doc) => {
        projects.push({ id: doc.id, name: doc.data().name });
      });

      setProjects(projects);
    });

    return () => unsubscribe();
  }, [user]);

  const closeDialog = () => {
    addProjectDialogRef.current?.close();
    editProjectDialogRef.current?.close();
    setOpened(false);
  };

  const deleteProject = (id: string) => {
    deleteDoc(doc(db, 'projects', id));
  };

  const editProject = (project: Project) => {
    setProjectToEdit({ ...project });
    editProjectDialogRef.current?.showModal();
  };

  return (
    <StyledProjects>
      <p>Projects</p>
      <LineBreak />

      {projects.map((project) => (
        <StyledLink to={`project/${project.id}`} key={project.id}>
          <ProjectName>{project.name}</ProjectName>
          <EditIcon
            className="bi bi-pencil-square"
            onClick={() => {
              editProject(project);
              setOpened(true);
            }}
          ></EditIcon>
          <i
            className="bi bi-trash3"
            onClick={() => deleteProject(project.id)}
          ></i>
        </StyledLink>
      ))}

      <AddProjectButton
        onClick={() => {
          addProjectDialogRef.current?.showModal();
          setOpened(true);
        }}
      >
        Add Project+
      </AddProjectButton>

      <Dialog dialogRef={addProjectDialogRef} closeDialog={closeDialog}>
        <AddProject closeDialog={closeDialog} opened={opened} />
      </Dialog>

      <Dialog dialogRef={editProjectDialogRef} closeDialog={closeDialog}>
        <EditProject
          closeDialog={closeDialog}
          project={projectToEdit}
          opened={opened}
        />
      </Dialog>
    </StyledProjects>
  );
}

export default Projects;

const StyledProjects = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LineBreak = styled.hr`
  color: #2f313e;
`;

const StyledLink = styled(Link)`
  background-color: #34373f;
  padding: 12px;
  border-radius: 4px;
  display: flex;
  gap: 12px;
  text-decoration: none;

  :hover {
    filter: brightness(85%);
  }

  :active {
    filter: brightness(70%);
  }

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
`;

const EditIcon = styled.i`
  margin-left: auto;
`;

const ProjectName = styled.p`
  width: 160px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const AddProjectButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  text-decoration: underline;
  background-color: #22252e;
  outline: 1px solid #34373f;

  :hover {
    cursor: pointer;
    color: lightskyblue;
  }
`;
