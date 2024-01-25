const subHeading = document.createElement('h3');
subHeading.textContent = 'Buy high-quality organic fruits online';
const header = document.getElementById('header')
    header.appendChild(subHeading);

subHeading.style.fontStyle = 'italic';

const totalFruitsParagraph = document.createElement('p');
  totalFruitsParagraph.textContent = 'Total fruits: 4';
  totalFruitsParagraph.id = 'fruits-total';

const divs = document.getElementsByTagName('div');
const secondDiv = divs[1];

const fruits = document.querySelector('.fruits')
  secondDiv.insertBefore(totalFruitsParagraph, fruits);