// loading the page from the controller which is in charge to 
// interact between the model and the view.
import controller from './controller.js';
const mycontroller = new controller('hikes');
window.addEventListener('load', () => {
  mycontroller.showHikeList();
});
