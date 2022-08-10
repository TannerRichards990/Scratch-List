import { getCars } from './fetch-utils.js';
// getCars();
import { renderCarCard } from './render.js';

const carsContainerEl = document.getElementById('car-list-container');



// let state
async function loadCars() {
    const cars = await getCars();

    for (let car of cars) {
        const carEl = renderCarCard(car);
        carsContainerEl.append(carEl);
    }
}

loadCars();



// set event listeners 
// deploy issue




  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
