const form = document.forms['heroForm'];
form.addEventListener('submit', makeHero, false);


function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the inp
    hero.realName = form.realName.value;
    hero.category = form.category.value;
    /*
  This creates a powers property for our hero object that starts as an empty array. We then iterate over each checkbox to see if it was checked in the form. If it was, we add the 'value' property of the checkbox to the powers array using the push method.
  */
    hero.powers = [];
    for (let i = 0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;

    alert(JSON.stringify(hero)); // convert object to JSON string and display it

    return hero;
}

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {

    const heroName = form.heroName.value
    if (heroName.toUpperCase().startsWith('X')) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}

