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
            Storage.deleteProject(project.projectId);
            button.parentElement.removeChild(button);
            viewAllButton.click();
        });

        buttons.push(button);
        projectList.appendChild(button);
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
                ${task.dueDate}
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

    let cancelButton = addProjectModal.querySelector('.cancel-button');
    cancelButton.addEventListener('click', () => addProjectModal.close());

    addProjectButton.addEventListener('click', () => {
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

        addProjectForm.reset();
    });

    //edit-project modal
    cancelButton = editProjectModal.querySelector('.cancel-button');
    cancelButton.addEventListener('click', () => editProjectModal.close());

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

    function closeModal(e, modal) {
        if (e.target === modal) {
            modal.close();
        }
    }

    return {
        addProject,
        addTask,
    };
})();

export default View;