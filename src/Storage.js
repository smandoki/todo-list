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
        const projects = this.getProjects();
        projects.push(project);

        localStorage.setItem('projects', JSON.stringify(projects));
    }

    static deleteProject(id) {
        const projects = this.getProjects().filter(project => project.projectId != id);
        localStorage.setItem('projects', JSON.stringify(projects));

        const tasks = this.getTasks().filter(task => task.projectId != id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static addTask(task) {
        const tasks = this.getTasks();
        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static deleteTask(id) {
        const tasks = this.getTasks().filter(task => task.taskId != id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static editProject(id, title) {
        const projects = this.getProjects();
        const index = projects.findIndex(project => project.projectId === id);

        projects[index].title = title;
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    static editTask(id, title, desc, priority, dueDate) {
        const tasks = this.getTasks();
        const index = tasks.findIndex(task => task.taskId === id);
        const task = tasks[index];

        task.title = title;
        task.desc = desc;
        task.priority = priority;
        task.dueDate = dueDate;

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static setComplete(id, completed) {
        const tasks = this.getTasks();
        const index = tasks.findIndex(task => task.taskId === id);
        const task = tasks[index];
        task.completed = completed;

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}