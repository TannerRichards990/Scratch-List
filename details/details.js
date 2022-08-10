import { getCarById } from '../fetch-utils.js';
import { renderCarDetail } from '../render.js';

const detailContainerEl = document.getElementById('car-detail-container');

const params = new URLSearchParams(window.location.search);


async function loadData() {
    const data = await getCarById(params.get('id'));
    const carDetailEl = renderCarDetail(data);
    detailContainerEl.append(carDetailEl);


}
loadData();

// function changeClass() {
//     modelP.textContent = car.model;
//     if (modelP === car.model) {
//       modelP.classList.remove('default-class');
//       modelP.classList.add(`${car.model}-class`);
//     }
//   }
