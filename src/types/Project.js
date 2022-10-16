import { v4 as uuidv4 } from 'uuid';

export default class Project {
    constructor(title) {
        this.projectId = uuidv4();
        this.title = title;
    }
}