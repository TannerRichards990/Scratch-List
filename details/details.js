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

if (data === 1) {
StyleSheet.background 
}