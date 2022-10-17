import Storage from './Storage';
import Project from './types/Project';
import Task from './types/Task';

const View = (() => {

    const buttons = Array.from(document.querySelectorAll('nav .button'));
    const addTaskButton = document.querySelector('#add-task-button');
    const projectList = document.querySelector('#project-list');
    const taskList = document.querySelector('#task-list');
    const viewAllButton = document.querySelector('#view-all-button');
    const editProjectModal = document.querySelector('#edit-project-modal');
    const editProjectForm = document.querySelector('#edit-project-form');
    const deleteProjectForm = document.querySelector('#delete-project-form');
    const deleteProjectModal = document.querySelector('#delete-project-modal');
    const addTaskForm = document.querySelector('#add-task-form');

    //Allow nav buttons to set active status onclick
    //and make main nav buttons hide add-task button
    buttons.forEach(button => button.addEventListener('click', () => {
        setActive(button);
        addTaskButton.classList.add('hidden')
    }));

    function setActive(button) {
        buttons.forEach(button => button.classList.remove('active'));
        button.classList.add('active');
    }


    //Add new project to DOM
    function addProject(project) {
        const button = document.createElement('div');
        button.setAttribute('class', 'project button');
        button.setAttribute('id', project.projectId);

        button.innerHTML = (
            `${project.title}
            <div>
                <i class="bi bi-pencil-square edit"></i>
                <i class="bi bi-trash delete"></i>
            </div>`
        );

        button.addEventListener('click', () => {
            setActive(button);
            addTaskButton.classList.remove('hidden');
            addTaskForm.projectId.value = project.projectId;

            const tasks = Storage.getProjectTasks(project.projectId);
            taskList.innerHTML = '';
            tasks.forEach(task => addTask(task));
        });

        const editButton = button.querySelector('.edit');
        const deleteButton = button.querySelector('.delete');

        editButton.addEventListener('click', (e) => {
            e.stopPropagation();

            editProjectForm.projectId.value = project.projectId;
            editProjectForm.title.value = project.title;

            editProjectModal.showModal();
        });
        
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();

            deleteProjectForm.projectId.value = project.projectId;
            const message = deleteProjectForm.querySelector('.delete-message');
            message.innerText = `Are you sure you want to delete ${project.title}?`;

            deleteProjectModal.showModal();
        });

        buttons.push(button);
        projectList.appendChild(button);
        button.click();
    }

    //Add new task to DOM
    function addTask(task) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.classList.add(task.priority);
        taskItem.setAttribute('id', task.taskId);

        taskItem.innerHTML = (
            `<div class="task-item-left">
                <input type="checkbox" disabled>
                ${task.title}
            </div>
            <div class="task-item-right">
                <button>Details</button>
                <div class="date">${task.dueDate}</div>
                <div>
                    <i class="bi bi-pencil-square edit"></i>
                    <i class="bi bi-trash delete"></i>
                </div>
            </div>`
        );

        const checkbox = taskItem.querySelector('input');
        checkbox.checked = task.completed;
        
        const detailsButton = taskItem.querySelector('button');
        const editButton = taskItem.querySelector('.edit');
        const deleteButton = taskItem.querySelector('.delete');

        //TODO: attach modals to details, edit and delete buttons here

        taskList.appendChild(taskItem);
    }

    
    //handle opening and closing of add-project modal
    const addProjectModal = document.querySelector('#add-project-modal');
    const addProjectButton = document.querySelector('#add-project-button');

    const addProjectCancel = addProjectModal.querySelector('.cancel-button');
    addProjectCancel.addEventListener('click', (e) => {
        addProjectModal.close();
        e.preventDefault();
    });

    addProjectButton.addEventListener('click', () => {
        addProjectForm.reset();
        addProjectModal.showModal();
    });

    addProjectModal.addEventListener('click', e => {
        closeModal(e, addProjectModal);
    });

    //handle add-project modal event
    const addProjectForm = document.querySelector('#add-project-form');
    addProjectForm.addEventListener('submit', () => {
        const project = new Project(addProjectForm.title.value);

        Storage.addProject(project);
        View.addProject(project);
    });

    //edit-project modal
    const editProjectCancel = editProjectModal.querySelector('.cancel-button');
    editProjectCancel.addEventListener('click', (e) => {
        editProjectModal.close();
        e.preventDefault();
    });

    editProjectModal.addEventListener('click', e => {
        closeModal(e, editProjectModal);
    });

    editProjectForm.addEventListener('submit', () => {
        const projectId = editProjectForm.projectId.value;
        const title = editProjectForm.title.value;
        
        Storage.editProject(projectId, title);

        projectList.innerHTML = '';
        const projects = Storage.getProjects();
        projects.forEach(project => addProject(project));
    });

    //delete-project modal
    deleteProjectModal.addEventListener('click', e => {
        closeModal(e, deleteProjectModal);
    });

    deleteProjectForm.addEventListener('submit', () => {
        const projectId = deleteProjectForm.projectId.value;
        const project = document.getElementById(projectId);

        Storage.deleteProject(projectId);
        project.parentElement.removeChild(project);

        viewAllButton.click();
    });

    const cancelProjectDelete = deleteProjectModal.querySelector('.delete-cancel-button');
    cancelProjectDelete.addEventListener('click', (e) => {
        deleteProjectModal.close();
        e.preventDefault();
    });

    function closeModal(e, modal) {
        if (e.target === modal) {
            modal.close();
        }
    }

    //HANDLE ADD TASK MODALS BELOW
    const addTaskModal = document.querySelector('#add-task-modal');
    const cancelAddTask = addTaskModal.querySelector('.cancel-button');

    addTaskModal.addEventListener('click', (e) => {
        closeModal(e, addTaskModal);
    });

    addTaskButton.addEventListener('click', () => addTaskModal.showModal());
    cancelAddTask.addEventListener('click', (e) => {
        e.preventDefault();
        addTaskModal.close();
    });

    addTaskForm.addEventListener('submit', () => {
        const projectId = addTaskForm.projectId.value;
        const title = addTaskForm.title.value;
        const desc = addTaskForm.desc.value;
        const priority = addTaskForm.priority.value;
        const dueDate = addTaskForm.dueDate.value;

        const task = new Task(
            projectId,
            title,
            desc,
            priority,
            dueDate
        );

        Storage.addTask(task);
        addTask(task);

        addTaskForm.reset();
        addTaskForm.projectId.value = projectId;
    });

    //functionality of default nav buttons
    viewAllButton.addEventListener('click', () => {
        taskList.innerHTML = '';

        const tasks = Storage.getTasks();
        tasks.forEach(task => addTask(task));
    });

    return {
        addProject,
        addTask,
    };
})();

export default View;