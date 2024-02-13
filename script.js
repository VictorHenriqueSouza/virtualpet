let hunger = parseInt(localStorage.getItem('hunger')) || 50;
let happiness = parseInt(localStorage.getItem('happiness')) || 50;

const petElement = document.getElementById('pet');
const statusElement = document.getElementById('status');

function updateStatus() {
  statusElement.textContent = `Hunger: ${hunger}, Happiness: ${happiness}`;
}

function feed() {
  if (hunger > 0) {
    hunger -= 10;
    localStorage.setItem('hunger', hunger);
    updateStatus();
  }
}

function play() {
  happiness += 10;
  localStorage.setItem('happiness', happiness);
  updateStatus();
}

function updatePet() {
  if (hunger < 100) hunger += 5;
  if (happiness > 0) happiness -= 5;
  localStorage.setItem('hunger', hunger);
  localStorage.setItem('happiness', happiness);
  updateStatus();
}

setInterval(updatePet, 5000); // Update pet status every 5 seconds

// Initial update of status
updateStatus();