const continueTextBtn = document.getElementById('continueTextBtn');
const statusText = document.getElementById('statusText');
const headerText = document.getElementById('headerText');
const actions = document.getElementById('actions');
const dayCounter = document.getElementById('dayCounter');
const craft = document.getElementById('craft');
const search = document.getElementById('search');
const inventory = document.getElementById('inventory');
const inventoryWindow = document.getElementById('inventoryWindow');
let searchLvl = 1;
let craftLvl = 1;
let btnCount = 0;
let countDays = 1;
let invList = [];

continueTextBtn.addEventListener('click', () => {
    btnCount++;
    if (btnCount == 1){
        headerText.style.display = 'none';
        statusText.style.display = 'block';
        continueTextBtn.textContent = 'Press to Continue';
    } else if (btnCount == 2) {
        statusText.textContent = 'Well, appears to be no one around you to save you. Might as well prepare to survive.'
        continueTextBtn.style.display = 'none';
        actions.style.display = 'block';
        dayCounter.textContent = `Day ${countDays}`
    };
});

search.addEventListener('click', () => {
    if (searchLvl == 1) {
        let randomNumber = Math.random() * 10
        if (randomNumber >= 8) {
            statusText.textContent = 'You found some wood!';
            invList.push('wood');
        } else if (randomNumber >= 5) {
            statusText.textContent = 'You found some stone!';
            invList.push('stone');
        } else if (randomNumber >= 2) {
            statusText.textContent = 'You found some berries!';
            invList.push('berry');
        } else {
            statusText.textContent = 'You found nothing...';
        }
    }
})

inventory.addEventListener('click', ()=>{
    inventoryWindow.style.display = "block";
    inventoryWindow.style.backgroundColor = 'black';
})