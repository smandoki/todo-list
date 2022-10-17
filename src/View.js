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
    const taskDetailsModal = document.querySelector('#task-details-modal');
    const taskDetailsForm = document.querySelector('#task-details-form');
    const editTaskModal = document.querySelector('#edit-task-modal');
    const editTaskForm = document.querySelector('#edit-task-form');
    const deleteTaskModal = document.querySelector('#delete-task-modal');
    const deleteTaskForm = document.querySelector('#delete-task-form');
    const viewTodayButton = document.querySelector('#view-today-button');
    const viewWeekButton = document.querySelector('#view-week-button');

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
    function addProject(project, click) {
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
        if (click) button.click();
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
                <div class="title">${task.title}</div>
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

        detailsButton.addEventListener('click', (e) => {
            e.preventDefault();

            taskDetailsForm.title.value = task.title;
            taskDetailsForm.desc.value = task.desc;
            taskDetailsForm.priority.value = task.priority;
            taskDetailsForm.dueDate.value = task.dueDate;

            taskDetailsModal.showModal();
        });

        editButton.addEventListener('click', e => {
            e.preventDefault();

            editTaskForm.taskId.value = task.taskId;
            editTaskForm.title.value = task.title;
            editTaskForm.desc.value = task.desc;
            editTaskForm.priority.value = task.priority;
            editTaskForm.dueDate.value = task.dueDate;

            editTaskModal.showModal();
        });

        deleteButton.addEventListener('click', e => {
            e.preventDefault();

            const message = deleteTaskModal.querySelector('.delete-message');
            message.innerText = `Are you sure you want to delete ${task.title}`;
            deleteTaskForm.taskId.value = task.taskId;

            deleteTaskModal.showModal();
        });

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
        View.addProject(project, true);
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
        projects.forEach(project => addProject(project, true));
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

    //task details modal
    taskDetailsModal.addEventListener('click', e => {
        closeModal(e, taskDetailsModal);
    });

    //edit task modal
    editTaskModal.addEventListener('click', e => {
        closeModal(e, editTaskModal);
    });

    editTaskForm.addEventListener('submit', () => {
        const taskId = editTaskForm.taskId.value;
        const title = editTaskForm.title.value;
        const desc = editTaskForm.desc.value;
        const priority = editTaskForm.priority.value;
        const dueDate = editTaskForm.dueDate.value;

        Storage.editTask(
            taskId,
            title,
            desc,
            priority,
            dueDate
        );

        const taskItem = document.getElementById(taskId);
        const taskTitle = taskItem.querySelector('.title');
        const taskDueDate = taskItem.querySelector('.date');
        taskTitle.innerText = title;
        taskDueDate.innerText = dueDate;

        taskItem.classList.remove('low');
        taskItem.classList.remove('medium');
        taskItem.classList.remove('high');
        taskItem.classList.add(priority);
    });

    const cancelEditTask = editTaskModal.querySelector('.cancel-button');
    cancelEditTask.addEventListener('click', e => {
        e.preventDefault();
        editTaskModal.close();
    });

    //delete task modal
    deleteTaskModal.addEventListener('click', e => {
        closeModal(e, deleteTaskModal);
    })

    const cancelTaskDelete = deleteTaskModal.querySelector('.delete-cancel-button');
    cancelTaskDelete.addEventListener('click', e => {
        e.preventDefault();
        deleteTaskModal.close();
    });

    deleteTaskForm.addEventListener('submit', () => {
        const taskId = deleteTaskForm.taskId.value;
        const taskItem = document.getElementById(taskId);

        taskItem.parentElement.removeChild(taskItem);
        Storage.deleteTask(taskId);
    });

    //functionality of default nav buttons
    viewAllButton.addEventListener('click', () => {
        taskList.innerHTML = '';

        const tasks = Storage.getTasks();
        tasks.forEach(task => addTask(task));
    });

    viewTodayButton.addEventListener('click', () => {
        const today = new Date();
        const tasks = Storage.getTasks().filter(task => {
            const date = new Date(task.dueDate);

            return (
                today.getDate() === date.getDate() &&
                today.getMonth() === date.getMonth() &&
                today.getFullYear() === date.getFullYear()
            );
        });

        taskList.innerHTML = '';
        tasks.forEach(task => addTask(task));
    });

    viewWeekButton.addEventListener('click', () => {
        const currentDate = new Date();

        const tasks = Storage.getTasks().filter(task => {
            const date = new Date(task.dueDate);

            return date.getTime() < currentDate.getTime() + (7 * 24 * 60 * 60 * 1000);
        });

        taskList.innerHTML = '';
        tasks.forEach(task => addTask(task));
    });

    return {
        addProject,
        addTask,
    };
})();

export default View;