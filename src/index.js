import './style.css';
import Project from './types/Project';
import Task from './types/Task';
import View from './View';
import Storage from './Storage';

//load projects and tasks from storage on startup
function init() {
    const tasks = Storage.getTasks();
    tasks.forEach(task => View.addTask(task));

    const projects = Storage.getProjects();
    projects.forEach(project => View.addProject(project));

    View.addTask(new Task(1, 'Learn Angular', '', 'medium', '02-05-2022'));
}

init();