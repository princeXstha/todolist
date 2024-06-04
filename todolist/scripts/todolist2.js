const todolist = [{ name: ' ', duedate: ' ' }];

function render() {
    let todolistHTML = '';
    todolist.forEach((todoobj, index) => {
        if (index > 0) {
            const { name, duedate } = todoobj;
            const html = `<div> ${index} TASK : ${name} </div> <div>DUE : ${duedate} </div>
            <button class="delete js-delete">DELETE</button>`;
            todolistHTML += html;
        }
    });
    document.querySelector('.js-todo-list').innerHTML = todolistHTML;

    document.querySelectorAll('.js-delete').forEach((deletebutton, index) => {
        deletebutton.addEventListener('click', () => {
            todolist.splice(index + 1, 1);
            render();
        });
    });
}

document.querySelector('.js-add').addEventListener('click', () => {
    addtodo();
});

function addtodo() {
    const inputEle = document.querySelector('.js-name-input');
    const inputdate = document.querySelector('.js-duedate');
    const name = inputEle.value;
    const duedate = inputdate.value;
    todolist.push({
        name: name,
        duedate: duedate
    });
    inputEle.value = '';
    inputdate.value = '';
    render();
}
