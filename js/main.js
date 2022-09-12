var assignmentList = '';

const links = [
    {
        label: "Week1 notes",
        url: "week1/index.html"
    }
]

links.forEach(link => {

    assignmentList += '<li> <a href = "' + link.url + '">' + link.label + ' </a> </li>';
});

document.getElementById("orderedList").innerHTML = assignmentList;




// Read a list of links from an array. (You will also need to create this array)
//  For each of the items in the array of links you should create a li element, add an a element with the label and url from the list of links, and add the new li element into the ol element you grabbed above.