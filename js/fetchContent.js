// Some Ajax used to fetch header and footer 

fetch("/WDD-330---Front-End-Development-II/codeSnippets/header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
    });


fetch("/WDD-330---Front-End-Development-II/codeSnippets/footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });