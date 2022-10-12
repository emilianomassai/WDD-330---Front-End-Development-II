/******************************************************************************
 * HIKE MODEL:
 * 
 * In this project, the model has the array of hikes and a couple of useful
 * functions to retrieve data from the array.
 * This is normally the part of the code interacting with the database and all
 * the back end stuff.
 ******************************************************************************/

// The starting array for the activity
const hikeList = [
  {
    name: 'Bechler Falls',
    imgSrc: 'BechlerFalls.jpeg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description:
      'Bechler Falls ht. 15 feet (4.6 m) is a waterfall on the Bechler River in Yellowstone National Park. Bechler Falls is the last waterfall on the Bechler River and is approximately 1 mile (1.6 km) from the confluence with the Fall River. It can be reached via the Bechler River trail approximately 3.5 miles (5.6 km) from the Cave Falls trailhead at the south boundary of the park. The falls were named in 1921 by explorers E. C. Gregg and C.H. Birdseye.',
    directions:
      'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
  },
  {
    name: 'Teton Canyon',
    imgSrc: 'TetonCanyon.jpeg',
    imgAlt: 'Image of Teton Canyon',
    distance: '5 miles',
    difficulty: 'Medium',
    description:
      'The canyons of the Teton Range lie almost entirely within Grand Teton National Park in the U.S. state of Wyoming. Ranging from 9 miles (14 km) to less than 1 mile (1.6 km) in length and up to 6,000 feet (1,800 m) deep, the canyons were carved primarily by glaciers over the past 250,000 years. The canyons in the Teton Range descend in altitude generally west to east and many have lakes at their outlets. The lakes were created by terminal moraines left behind by the now retreated glaciers.',
    directions:
      'Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.'
  },
  {
    name: 'Denanda Falls',
    imgSrc: 'DenandaFalls.jpeg',
    imgAlt: 'Image of Denanda Falls',
    distance: '8 miles',
    difficulty: 'Hard',
    description:
      'Dunanda Falls in the Bechler area of Yellowstone National Park falls 110 ft in a lovely curtain. While hiking it as a day hike is 16.9 miles, it’s mostly level through the meadows and along Boundary Creek and the falls are worth it. You’ll even get a bonus waterfall in Silver Scarf Falls.',
    directions:
      'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.'
  }
];

/****** CLASS
    Here we create a model class and fill it with useful methods 
********/
class model {
  // to use it when needing to use the array of hikes in 
  // other parts of the code.
  getAllHikes() {
    return hikeList;
  }

  // return rhe right hike by name
  getHikeByName(name) {
    return hikeList.find(hike => hike.name === name);
  }
}

export default model;
