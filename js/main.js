//array with all the week's links 
var weekItems = [
    {
        label: "Week 01",
        url: "/WDD-330---Front-End-Development-II/weeks/week1/index.html"
    },

    {
        label: "Week 02",
        url: "/WDD-330---Front-End-Development-II/weeks/week2/index.html"
    }
]

// calling the function that displays the content of the array
displayListOfWeeks(weekItems, "listOfWeeks");


// defining the function that displays the content of the array
function displayListOfWeeks(weekItems, listElementName) {
    let ol = document.getElementById(listElementName);
    if (ol) {

        // loop through anonymous objects
        weekItems.forEach(element => {

            // create anchor and set attributes
            let anchor = document.createElement('a');
            anchor.innerHTML = element.label;
            anchor.href = element.url;
            anchor.target = "_blank";

            //create list item and attach anchor
            let li = document.createElement('li');
            li.appendChild(anchor);

            ol.appendChild(li);
        });
    }
}


// This is how I was managing the array with javascript before look at the 
// meeting of week 1:


// creating variable to store the values of the array
// var assignmentList = '';

// // array with all the week's links 
// const links = [
//     {
//         label: "Week1 notes",
//         url: "/weeks/week1/index.html"
//     },

//     {
//         label: "Week2 notes",
//         url: "/weeks/week2/index.html"
//     }
// ]

// // for each loop to pull out information from the array and concatenate it 
// // in the assignmentList variable. Check first if the element has been created
// // properly
// if (links) {
//     links.forEach(link => {

//         assignmentList += '<li> <a href = "' + link.url + '">' + link.label + ' </a> </li>';
//     });

//     // selecting the HTML element where the content of the array will be dynamically
//     // displayed  
//     document.getElementById("listOfWeeks").innerHTML = assignmentList;
// }
