const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'];
const table = document.getElementById('rainbowTable');
const manualButton = document.getElementById('manualButton');
const autoButton = document.getElementById('autoButton');

let intervalId;

function updateRainbow() {
  const cells = table.getElementsByTagName('td');
  
  // Move the rainbow down the table
  for (let i = cells.length - 1; i > 0; i--) {
    cells[i].style.backgroundColor = cells[i - 1].style.backgroundColor;
  }
  cells[0].style.backgroundColor = rainbowColors.shift();
  rainbowColors.push(cells[0].style.backgroundColor);
}

manualButton.addEventListener('click', updateRainbow);

autoButton.addEventListener('click', () => {
  if (!intervalId) {
    intervalId = setInterval(updateRainbow, 300);
  } else {
    clearInterval(intervalId);
    intervalId = null;
  }
});