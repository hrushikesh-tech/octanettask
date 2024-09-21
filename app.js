let listContainer = document.getElementById('list-container');
let inputBox = document.getElementById('input-box');


function addTask() {
    if (inputBox.value === '') {
        alert('Please Enter the Text');
    } else {
        const task = document.createElement('li');
        task.textContent = inputBox.value;

        
        let deleteSpan = document.createElement('span');
        deleteSpan.textContent = "\u00d7"; 
        deleteSpan.classList.add("delete-btn");
        task.appendChild(deleteSpan);

        let editSpan = document.createElement('span');
        editSpan.textContent = "Edit";
        editSpan.classList.add("edit-btn");
        task.appendChild(editSpan);

       
        listContainer.appendChild(task);
        inputBox.value = ''; 

        saveData(); 
    }
}

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove(); 
        saveData();
    } else if (e.target.classList.contains('edit-btn')) {
        editTask(e.target.parentElement); 
    }
});


function editTask(taskItem) {
    let currentText = taskItem.firstChild.textContent;
    let newText = prompt("Edit your task:", currentText);

    if (newText !== null && newText.trim() !== "") {
        taskItem.firstChild.textContent = newText;

        saveData(); 
    }
}


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}


function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}


showTask();
