export default class Storage {
    static getProjects() {
        if ('projects' in localStorage) {
            return JSON.parse(localStorage.getItem('projects'));
        }

        return [];
    }

    static getTasks() {
        if ('tasks' in localStorage) {
            return JSON.parse(localStorage.getItem('tasks'));
        }

        return [];
    }

    static getProjectTasks(id) {
        return this.getTasks().filter(task => task.projectId === id);
    }

    static addProject(project) {
        const projects = this.getProjects().push(project);
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    static deleteProject(id) {
        const projects = this.getProjects().filter(project => project.id != id);
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    static addTask(task) {
        const tasks = this.getTasks().push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static deleteTask(id) {
        const tasks = this.getTasks().filter(task => task.id != id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}