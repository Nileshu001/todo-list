const inputBox = document.getElementById('task-Add');
const taskListContainer = document.getElementById('task-list-container');

function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('taskList', 'mb-3');
    taskDiv.innerHTML = `
        <div class="form-check">
            <input class="form-check-input" type="checkbox">
            <label class="form-check-label">
                ${taskText}
            </label>
        </div>
        <div class="delectTask">
            <ion-icon name="trash-outline" class="delectTask"></ion-icon>
        </div>
    `;

    taskListContainer.appendChild(taskDiv);
    inputBox.value = '';

    taskDiv.querySelector('.delectTask ion-icon').addEventListener('click', () => {
        taskListContainer.removeChild(taskDiv);
    });

    taskDiv.querySelector('.form-check-input').addEventListener('change', (event) => {
        const label = taskDiv.querySelector('.form-check-label');
        if (event.target.checked) {
            label.style.textDecoration = 'line-through';
            label.style.color = 'skyblue';
        } else {
            label.style.textDecoration = 'none';
            label.style.color = 'black';
        }
    });
}
