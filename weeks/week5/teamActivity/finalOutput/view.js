/******************************************************************************
 * HIKE VIEW:
 * 
 * In this project, the view is in charge to get the hikes of the array and 
 * display them properly to the user. To do so, we need to create the view class
 * used from the controller to interact with the model and complete the job.
 ******************************************************************************/

// creating a path variable to make it easier to type, and less error prone.
// const imgPath = '//byui-cit.github.io/cit261/examples/';
const imgPath = '/WDD-330---Front-End-Development-II/weeks/week5/teamActivity/finalOutput/images/';



/****** CLASS
    Here we create a view class to group all the needed methods.
********/
class view {

  // METHOD: displayHikeList()
  // This is in charge of placing the list in the HTML page
  displayHikeList(hikeListElement, hikeList) {

    hikeListElement.innerHTML = '';
    // we need to pass the list of hikes here because it doesn't exist
    hikeList.forEach(hike => {
      // adding each element to the page 
      hikeListElement.appendChild(this.displayOneHike(hike));
    });
  }

  // METHOD: displayOneHike()
  // Takes an hike retrieved from the array and put it inside the HTML
  // element to make sure to display it properly in the page.
  displayOneHike(hike) {
    const element = document.createElement('li');
    element.classList.add('light');

    // to retrieve easier an hike element in the future..
    element.setAttribute('data-name', hike.name);
    element.innerHTML = ` <h2>${hike.name}</h2>
    <div class="image"><img src="${imgPath}${hike.imgSrc}" alt="${hike.imgAlt
      }"></div>
    <div>
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
            <div>
            <h3>Description</h3>
            <p>${hike.description}</p>
        </div>
        <div>
            <h3>How to get there</h3>
            <p>${hike.directions}</p>
        </div>
    </div>`;

    return element;
  }


  // METHOD: displayOneHikeCompleted()
  // Takes all the hikes and put them together to display the final list of
  displayOneHikeCompleted(parent, hike) {
    const backButton = document.createElement('button');
    backButton.innerHTML = '&lt;- All Hikes';
    const element = document.createElement('li');
    element.innerHTML = ` 
        
            <img src="${imgPath}${hike.imgSrc}" alt="${hike.imgAlt}">
            <h2>${hike.name}</h2>
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
            <div>
                <h3>Description</h3>
                <p>${hike.description}</p>
            </div>
            <div>
                <h3>How to get there</h3>
                <p>${hike.directions}</p>
            </div>
        
        `;
    parent.innerHTML = '';
    element.insertBefore(backButton, element.childNodes[0]);
    parent.appendChild(element);

    // send to the controller to attach a listener
    return backButton;
  }
}
export default view;
