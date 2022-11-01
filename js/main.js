//array with all the week's links 
var weekItems = [
    {
        label: "Week 01",
        url: "/weeks/week1/index.html"
    },

    {
        label: "Week 02",
        url: "/weeks/week2/index.html"
    },
    {
        label: "Week 03",
        url: "/weeks/week3/index.html"
    },
    {
        label: "Week 04",
        url: "/weeks/week4/index.html"
    },
    {
        label: "Week 05 and 06",
        url: "/weeks/week5/index.html"
    },
    {
        label: "Week 07",
        url: "/weeks/week7/index.html"
    },
    {
        label: "Week 08",
        url: "/weeks/week8/index.html"
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


