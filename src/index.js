import './style.css';
import View from './View';
import Storage from './Storage';

//load projects and tasks from storage on startup
function init() {
    const tasks = Storage.getTasks();
    tasks.forEach(task => View.addTask(task));

    const projects = Storage.getProjects();
    projects.forEach(project => View.addProject(project, false));
}

init();