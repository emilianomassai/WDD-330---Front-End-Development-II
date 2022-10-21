
/*
All the user interaction logic is happening here. 
    - CREATE CLOSE BUTTON at the end of each task;
    - CLICK CLOSE BUTTON to hide a task from the list;
    - ADD CHECKED SYMBOL once clicking on a task;
    - CREATE NEW TASK once clicking on the plus button.
*/

//DEBUG///
var arrayOfTasks = []
///////////
window.onload = function loadingTasks() {
    if (localStorage.length != 0) {
        var checkLocalStorage = document.getElementById("listOfTasks");
        checkLocalStorage.innerHTML = "Local Storage is not empty."

        //pull tasks from local storage
        var tempArray = JSON.parse(localStorage.getItem('arrayOfTasks'))

        // store the retrieved values in the array:
        arrayOfTasks = tempArray

        // the array is filled correctly
        console.log("Elements in the Local Storage: " + arrayOfTasks)

        // pull the values in the array into the page, one by one:
        var i;
        var li = document.createElement("li");
        var inputValue;

        for (i = 0; i < arrayOfTasks.length; i++) {
            checkLocalStorage.innerHTML = "You have " + (i + 1) + " tasks left. The values from the array needs to display separately in the page!"
            // arrayOfTasks.value[i]

            // RETRIEVED THE ELEMENTS ONE BY ONE FROM THE ARRAY 
            console.log("Values: " + arrayOfTasks[i])

            document.getElementById("listOfTasks").appendChild(li);
            inputValue = arrayOfTasks[i];
            var t = document.createTextNode(inputValue);


            // THE TASK NEEDS TO BE DISPLAYED ONE AT THE TIME!!!!
            li.appendChild(t);

            // MAYBE WITH THIS??
            // var div = document.createElement("DIV");
            // var txt = document.createTextNode("\u00D7");
            // div.className = "element";
            // div.appendChild(txt);
            // li.appendChild(div);
            ///////////////////////////////////////////////////

            deleteButton(li)
            deleteTask()
        }
    }
}



// Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }

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
        // else {
        //     arrayOfTasks.push(JSON.parse(localStorage.getItem('arrayOfTasks')))
        //     localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
        //     console.log('Array Lenght: ' + arrayOfTasks.length);
        //     console.log('Array Value: ' + arrayOfTasks[0])
        // }

        /////////////
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
            console.log('Remaining tasks: ' + arrayOfTasks)
            div.style.display = "none";

        }
    }
    ////////////////////////////////////////////////////////
}