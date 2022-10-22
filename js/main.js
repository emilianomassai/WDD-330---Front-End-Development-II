//array with all the week's links 
var weekItems = [
    {
        label: "Week 01",
        url: "/WDD-330---Front-End-Development-II/weeks/week1/index.html"
    },

    {
        label: "Week 02",
        url: "/WDD-330---Front-End-Development-II/weeks/week2/index.html"
    },
    {
        label: "Week 03",
        url: "/WDD-330---Front-End-Development-II/weeks/week3/index.html"
    },
    {
        label: "Week 04",
        url: "/WDD-330---Front-End-Development-II/weeks/week4/index.html"
    },
    {
        label: "Week 05",
        url: "/WDD-330---Front-End-Development-II/weeks/week5/index.html"
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
            anchor.target = "_self";

            //create list item and attach anchor
            let li = document.createElement('li');
            li.appendChild(anchor);

            ol.appendChild(li);
        });
    }
}


