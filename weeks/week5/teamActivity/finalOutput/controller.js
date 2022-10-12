/******************************************************************************
 * HIKE CONTROLLER:
 * 
 * The controller is in charge to work with both model and view. This is 
 * the only place where the model and the controller have the opportunity to 
 * interact. To make it happening, we need to import both model and view from
 * the other files.
 ******************************************************************************/
import model from './model.js';
import view from './view.js';

/****** CLASS
    Here we create a controller class to group all the needed methods.
********/
export default class controller {

  // constructor for the model and the view classes
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId);
    this.model = new model();
    this.view = new view(parentId);
  }

  // now that we have the classes ready, we can use all the methods 
  showHikeList() {
    // list of hikes from the model
    const hikeList = this.model.getAllHikes();

    // once we have the list of hikes from the model, we send it to the 
    // view 
    this.view.displayHikeList(this.parentElement, hikeList);
    // listener
    this.addHikeListener();
  }

  showOneHike(hikeName) {
    const hike = this.model.getHikeByName(hikeName);
    this.view.displayOneHikeCompleted(
      this.parentElement,
      hike
    ).ontouchend = () => {
      this.showHikeList();
    };
  }

  // This method will show the details of a hike. To do so, we need to attach a 
  // listener after the list has been created.
  addHikeListener() {

    // We have to convert the list of hikes to an array. When we loop through
    // the list of children of the list, those are a nodeList and not an 
    // array. 
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      child.addEventListener('touchend', e => {
        // using currentTarget instead of Target because it returns the object
        // whose event listener's callback is currently being invoked.
        this.showOneHike(e.currentTarget.dataset.name);
      });
    });
  }
}
