import { v4 as uuidv4 } from 'uuid';

export default class Task {
    constructor(projectId, title, desc, dueDate) {
        this.taskId = uuidv4();
        this.projectId = projectId;
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.completed = false;
    }
}