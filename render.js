export function renderCarCard(car) {
    const carEl = document.createElement('div');
    carEl.classList.add('car');

    const a = document.createElement('a');
    a.href = `/details/?id=${car.id}`;

    const img = document.createElement('img');
    img.src = `/assets/${car.Image}.png`;

    const brandP = document.createElement('p');
    brandP.textContent = car.brand;

    const modelP = document.createElement('p');
    modelP.textContent = car.model;

    // const colorP = document.createElement('p');
    // colorP.textContent = car.color;

    // const yearSpan = document.createElement('span');
    // yearSpan.textContent = car.year;

    // const descriptionSpan = document.createElement('span');
    // descriptionSpan.textContent = car.description;

    a.append(img, brandP, modelP);
    carEl.append(a);
    return carEl;
}