import React from 'react';
import styled from 'styled-components';

function Projects() {
  return (
    <StyledProjects>
      <p>Projects</p>
      <LineBreak />

      <StyledLink>
        <ProjectName>Project Name</ProjectName>
        <EditIcon className="bi bi-pencil-square"></EditIcon>
        <i className="bi bi-trash3"></i>
      </StyledLink>

      <StyledLink>
        <ProjectName>Project Name</ProjectName>
        <EditIcon className="bi bi-pencil-square"></EditIcon>
        <i className="bi bi-trash3"></i>
      </StyledLink>
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

const StyledLink = styled.a`
  background-color: #34373f;
  padding: 12px;
  border-radius: 4px;
  display: flex;
  gap: 12px;

  :hover {
    filter: brightness(85%);
  }

  :active {
    filter: brightness(70%);
  }

  i:hover {
    cursor: pointer;
    color: lightskyblue;
  }

  i:active {
    transform: scale(115%);
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
