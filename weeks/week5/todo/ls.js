// each time the user click to the add button, this function checks if 
// a value has entered, if so it stores the value to the local storage 
// and calls the displayTasks() function.

function addTask() {

    // adding the input to the localStorage
    const newTask = document.getElementById('newTask')
    const taskValue = newTask.value;
    if (taskValue) {
        console.log('taskValue: ' + taskValue);
        localStorage.setItem('task', taskValue);
        // location.reload();
        // localStorage.setItem('name', 'Pippo');
        // console.log("Localstorage value: " + localStorage.getItem);
        displayTasks()
    }
}


// To do: this function has to get the values from localstorage and display it
// in the web page. It should retrieve an array of tasks.

// todo: { id : timestamp, content: string, completed: bool }
// toDoList = [toDo];

function displayTasks() {
    const listOfTasks = document.getElementById('listOfTasks');

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        listOfTasks.innerHTML += `${value} <br>`;

    }
}

// this delete all the tasks from the localstorage 
function clearAll() {
    localStorage.clear()

}