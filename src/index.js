import './style.css';

const tasks = [
  { description: 'wash the dishes', completed: false, index: 1 },
  { description: 'do the to do list project', completed: true, index: 2 },
  { description: 'wash my clothes', completed: false, index: 3 },
  { description: 'do some cooking', completed: true, index: 4 },
];

function createTaskListItem(task) {
  const listItem = document.createElement('div');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  const description = document.createElement('span');
  description.textContent = task.description;

  checkbox.checked = task.completed;
  checkbox.addEventListener('change', () => {
    listItem.classList.toggle('completed');
    listItem.classList.toggle('incomplete');
    task.completed = !task.completed;
    description.classList.toggle('cancel-line');
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(description);

  listItem.classList.add(task.completed ? 'completed' : 'incomplete');

  if (task.completed) {
    description.classList.add('cancel-line');
  }
  return listItem;
}

const renderTaskList = () => {
  const taskList = document.getElementById('task-list');
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task) => {
    const listItem = createTaskListItem(task);
    taskList.appendChild(listItem);
  });
};

window.addEventListener('DOMContentLoaded', renderTaskList);
