// creating variable to store the values of the array
var assignmentList = '';

// array with all the week's links 
const links = [
    {
        label: "Week1 notes",
        url: "/weeks/week1/index.html"
    },

    {
        label: "Week2 notes",
        url: "/weeks/week2/index.html"
    }
]

// for each loop to pull out information from the array and concatenate it 
// in the assignmentList variable. Check first if the element has been created
// properly
if (links) {
    links.forEach(link => {

        assignmentList += '<li> <a href = "' + link.url + '">' + link.label + ' </a> </li>';
    });

    // selecting the HTML element where the content of the array will be dynamically
    // displayed  
    document.getElementById("orderedList").innerHTML = assignmentList;
}


