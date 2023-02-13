const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = newTaskInput.value;
  if (taskText.trim()) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete" onclick="deleteTask(this)">Supprimer</button>
    `;
    taskList.appendChild(taskItem);
    newTaskInput.value = '';
  }
}

function deleteTask(button) {
  const taskItem = button.parentNode;
  taskList.removeChild(taskItem);
}