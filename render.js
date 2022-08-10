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

    

    a.append(img, brandP, modelP);
    carEl.append(a);
    return carEl;
}

export function renderCarDetail(car) {
    const carDetailEl = document.createElement('div');
    carDetailEl.classList.add(`${car.model}`);
    
    const img = document.createElement('img');
    img.src = `/assets/${car.Image}.png`;

    const modelP = document.createElement('p');
    modelP.textContent = car.model;
    

    const colorP = document.createElement('p');
    colorP.textContent = car.color;

    const yearP = document.createElement('p');
    yearP.textContent = car.year;

    const descriptionP = document.createElement('p');
    descriptionP.textContent = car.description;

    carDetailEl.append(img, modelP, colorP, yearP, descriptionP);
    return carDetailEl;

}