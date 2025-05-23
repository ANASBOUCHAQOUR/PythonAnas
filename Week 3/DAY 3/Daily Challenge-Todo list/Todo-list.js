const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const listTasks = document.getElementById('listTasks');
const tasks = [];

function generateTaskId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function addTask(event) {
    event.preventDefault();
    
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    const newTask = {
        task_id: generateTaskId(),
        text: taskText,
        done: false
    };
    
    tasks.push(newTask);
    
    createTaskElement(newTask);
    
    taskInput.value = '';
    taskInput.focus();
}

function createTaskElement(task) {
    const taskElement = document.createElement('div');
    taskElement.className = 'task-item';
    taskElement.dataset.taskId = task.task_id;
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = task.done;
    checkbox.addEventListener('change', () => doneTask(task.task_id));
    
    const taskText = document.createElement('span');
    taskText.className = `task-text ${task.done ? 'done' : ''}`;
    taskText.textContent = task.text;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    deleteBtn.addEventListener('click', () => deleteTask(task.task_id));
    
    taskElement.appendChild(checkbox);
    taskElement.appendChild(taskText);
    taskElement.appendChild(deleteBtn);
    
    listTasks.appendChild(taskElement);
}

function doneTask(taskId) {
    const task = tasks.find(t => t.task_id === taskId);
    if (task) {
        task.done = !task.done;
        
        const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
        const taskText = taskElement.querySelector('.task-text');
        
        if (task.done) {
            taskText.classList.add('done');
        } else {
            taskText.classList.remove('done');
        }
    }
}

function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(t => t.task_id === taskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        
        const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
        if (taskElement) {
            taskElement.remove();
        }
    }
}

todoForm.addEventListener('submit', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && taskInput.value.trim() === '') {
        e.preventDefault();
    }
});

const clearTasks = document.getElementById('clearTasks');
clearTasks.addEventListener('click', (e) => {
    e.preventDefault();
    tasks.length = 0;   
    listTasks.innerHTML = ''; 
});
