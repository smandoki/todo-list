const View = (() => {

    //Allow nav buttons to set active status onclick
    const buttons = document.querySelectorAll('nav .button');
    buttons.forEach(button => button.addEventListener('click', setActive));

    function setActive(e) {
        buttons.forEach(button => button.classList.remove('active'));
        e.target.classList.add('active');
    }

    //make nav buttons hide the add-task button
    const addTaskButton = document.querySelector('#add-task-button');
    buttons.forEach(button => button.addEventListener('click', () => {
        addTaskButton.classList.add('hidden')
    }));

})();

export default View;