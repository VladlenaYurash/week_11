const input = document.getElementById('toDoForm');
const createTask = document.getElementById('createTask');
const taskList = document.getElementById('taskList')

createTask.addEventListener('click', function () {
    const taskText = toDoForm.value; //записываю значение в форме
    const element = document.createElement('li'); // создаю новый элемент
    element.textContent = taskText; // меняю содержимое элемента на то значение, которое записала раньше
    taskList.append(element); // добавляю элемент на страницу
    toDoForm.value = ''; // очищаю поле ввода
});

const checkTask = document.getElementById('taskList');
checkTask.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});