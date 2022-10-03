const form = document.forms['search'];
const input = form.searchInput
const button = form.button


//The focus event occurs when an element is focused on. 

// input.addEventListener('focus', () => alert('focused'), false);

//The blur event occurs when the user moves the focus away from the form element.

// input.addEventListener('blur', () => alert('blurred'), false);


form.addEventListener('submit', search, false);
function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}


