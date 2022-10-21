// each time the user click to the add button, this function checks if 
// a value has entered, if so it stores the value to the local storage 
// and calls the displayTasks() function.

// creating array for the tasks
var arrayOfTasks = []

function addTask() {

    // TODO: Modify this to save array of tasks in the local storage:
    // adding the input to the localStorage (JSON.stringify -> JSON.parse)
    const newTask = document.getElementById('newTask')
    const taskValue = newTask.value;
    if (taskValue) {
        console.log('Element to add: ' + taskValue);
        // localStorage.setItem('task', taskValue);

        // console.log('Localstorage getItem(): ' + localStorage.getItem('task'));

        arrayOfTasks.push(taskValue)
        console.log('Array: ' + arrayOfTasks.length);

        localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
        console.log('Localstorage array of Tasks: ' + localStorage.getItem('arrayOfTasks'));

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

    // listOfTasks.innerHTML = localStorage.getItem('arrayOfTasks');

    const parsedTasks = JSON.parse(localStorage.getItem('arrayOfTasks'));
    listOfTasks.innerHTML = '';
    for (let i = 0; i < parsedTasks.length; i++) {

        listOfTasks.innerHTML += parsedTasks[i] + '<br>';
    }
    // for (let i = 0; i < localStorage.length; i++) {
    //     const key = localStorage.key(i);
    //     const value = localStorage.getItem(key);

    //     listOfTasks.innerHTML += `${value} <br>`;

    //     // storing the values of each task inside array
    //     // arrayOfTasks.push(value)

    // }

    console.log("JSON: " + JSON.stringify(arrayOfTasks))
}
// localStorage.setItem('task', JSON.stringify(arrayOfTasks));

// this delete all the tasks from the localstorage 
function clearAll() {
    localStorage.clear()

}