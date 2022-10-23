
/*
All the user interaction logic is happening here. 
    - CREATE CLOSE BUTTON at the end of each task;
    - CLICK CLOSE BUTTON to hide a task from the list;
    - ADD CHECKED SYMBOL once clicking on a task;
    - CREATE NEW TASK once clicking on the plus button.
*/

// setting the empty array to fill it with tasks
var arrayOfTasks = []
// each time the page loads, it makes sure to get the tasks saved in the 
// local storage 
window.onload = function loadingTasks() {
    if (localStorage.length > 0) {
        //pull tasks from local storage
        var tempArray = JSON.parse(localStorage.getItem('arrayOfTasks'))

        // store the retrieved values in the array:
        arrayOfTasks = tempArray

        // the array is filled correctly
        console.log("Elements in the Local Storage: " + arrayOfTasks)
        leftTasks(arrayOfTasks)
        // pull the values in the array into the page, one by one:
        var i;
        var ul = document.createElement("ul");
        var value;

        for (i = 0; i < arrayOfTasks.length; i++) {
            // checkLocalStorage.innerHTML = "You have " + (i + 1) + " tasks left. The values from the array needs to display separately in the page!"
            // arrayOfTasks.value[i]

            // RETRIEVED THE ELEMENTS ONE BY ONE FROM THE ARRAY 
            console.log("Values: " + arrayOfTasks[i])

            value = arrayOfTasks[i];
            var t = document.createTextNode(value);

            var li = document.createElement('li');

            // THE TASK NEEDS TO BE DISPLAYED ONE AT THE TIME!!!!
            li.appendChild(t);
            document.getElementById("listOfTasks").appendChild(li)

            deleteButton(li)
        }

        deleteTask()
    } else {
        localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
    }
}

function leftTasks(arrayOfTasks) {
    if (localStorage.length > 0) {
        arrayOfTasks = JSON.parse(localStorage.getItem('arrayOfTasks'))

        var checkLocalStorage = document.getElementById("left");
        if (arrayOfTasks.length === 0) {
            checkLocalStorage.innerHTML = "Just relax, nothing to do for the moment! 😎"
        } else if (arrayOfTasks.length > 0 && arrayOfTasks.length < 6) {
            checkLocalStorage.innerHTML = 'You are doing great! Only ' + arrayOfTasks.length + ' left to do. 💪'
        } else if (arrayOfTasks.length > 5 && arrayOfTasks.length < 11) {
            checkLocalStorage.innerHTML = 'Getting busy? ' + arrayOfTasks.length + ' left to do. 🥵'
        } else {
            checkLocalStorage.innerHTML = 'Please ask for help. ' + arrayOfTasks.length + ' are too many tasks!! 😵'
        }
    }
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}



// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');

    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("newTask").value;
    var t = document.createTextNode(inputValue);

    li.appendChild(t);
    if (inputValue === '') {
        alert("Please enter some text first!");
    } else {

        var tempArray = JSON.parse(localStorage.getItem('arrayOfTasks'))

        // check if the task exist already in the list
        if (!tempArray.includes(inputValue)) {
            document.getElementById("listOfTasks").appendChild(li);

            /////DEBUG HOW TO ADD THE VALUES INTO THE ARRAY AND STORE IT INTO LOCAL STORAGE ///
            if (localStorage.length === 0) {
                arrayOfTasks.push(inputValue)
                // console.log('Array: ' + arrayOfTasks.length);
                localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));

                // console.log('Localstorage array of Tasks: ' + localStorage.getItem('arrayOfTasks'));
            } else {
                var tempArray = JSON.parse(localStorage.getItem('arrayOfTasks'))
                tempArray.push(inputValue)
                localStorage.setItem('arrayOfTasks', JSON.stringify(tempArray));

            }

            console.log("Local storage: " + localStorage.getItem('arrayOfTasks'))
            leftTasks(tempArray);

        } else {
            alert("The task exists already! Please enter another one.");
        }
    }
    document.getElementById("newTask").value = "";


    deleteButton(li)

    deleteTask()

}


/**
 * IT CREATES A DELETE BUTTON TO APPEND TO EACH ELEMENT ONCE 
 * CALLED.
 * 
 */
function deleteButton(li) {
    /////// CREATING DELETE BUTTON /////////////////////////////
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    ///////////////////////////////////////////////////////////
}


function deleteTask() {
    ////// DELETING THE TASK FROM LOCAL STORAGE /////////////////
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;

            // REMOVING THE TASK FROM THE ARRAY IN THE LOCAL STORAGE
            var taskToDelete = div.textContent.slice(0, -1)
            var tempArray = JSON.parse(localStorage.getItem('arrayOfTasks'))
            // var taskName = tempArray.splice(tempArray.indexOf(taskToDelete), 1);

            console.log('Removed tasks: ' + taskToDelete)
            arrayOfTasks = tempArray.filter(arrayItem => arrayItem !== taskToDelete);
            localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
            leftTasks(arrayOfTasks);

            console.log('Remaining tasks: ' + arrayOfTasks)
            div.style.display = "none";

        }
    }
    ////////////////////////////////////////////////////////
}