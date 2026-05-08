const continueTextBtn = document.getElementById('continueTextBtn'); // button to continue text
const statusText = document.getElementById('statusText'); // text in the middle
const headerText = document.getElementById('headerText'); // text on the top
const actions = document.getElementById('actions'); // actions div with crafting, inventory, and searching
const dayCounter = document.getElementById('dayCounter'); // day counter.
const craft = document.getElementById('craft'); // craft button
const search = document.getElementById('search'); // search button
const inventory = document.getElementById('inventory'); // inventory button
const inventoryWindow = document.getElementById('inventoryWindow');
const closeInvBtn = document.getElementById('closeInvBtn');
const invDisplay = document.getElementById('invDisplay');
const craftDisplay = document.getElementById('craftDisplay');
const craftWindow = document.getElementById('craftWindow');
const closeCraftBtn = document.getElementById('closeCraftBtn');
const pointer = document.getElementsByClassName('pointer');
const knife = document.getElementById('knife');
const campfire = document.getElementById('campfire');
const raft = document.getElementById('raft');
const confirmCraft = document.getElementById('confirmCraft');
window.raftObtained = false;
let craftSelect;
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
    if (searchLvl >= 1) {
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
    inventoryWindow.style.display = "grid";
    invDisplay.textContent = invList;
})

closeInvBtn.addEventListener('click', ()=>{
    inventoryWindow.style.display = 'none';
})

craft.addEventListener('click', ()=>{
    craftWindow.style.display = 'grid';
    if (craftLvl >= 1) {
        knife.classList.remove('hideCraft');
        campfire.classList.remove('hideCraft');
        raft.classList.remove('hideCraft');
    }
})

closeCraftBtn.addEventListener('click', () => {
    craftWindow.style.display = 'none';
    craftSelect = '';
})

for (i=0; i<pointer.length; i++) {
    pointer[i].style.cursor = "pointer";
}

knife.addEventListener('click', () => {
    craftSelect = 'knife';
})

campfire.addEventListener('click', () => {
    craftSelect = 'campfire';
})

raft.addEventListener('click', () => {
    craftSelect = 'raft';
})

confirmCraft.addEventListener('click', () => {
    let tempInvList = invList;
    if (craftSelect == 'knife') {
        if (invList.includes('wood') && invList.includes('stone')) {
            var index = invList.indexOf('wood');
            if (index !== -1) {
                invList.splice(index, 1);
            }
            var index = invList.indexOf('stone');
            if (index !== -1) {
                invList.splice(index, 1)
            }
            knife.style.display = 'none';
            invList.push('knife');
        } else {
            window.alert('You do not have enough materials!')
        }
    } else if (craftSelect == 'campfire') {
        var index = tempInvList.indexOf('wood')
        if (index !== -1) {
            tempInvList.splice(index, 1);
        }
        if (tempInvList.includes('wood')) {
            var index = invList.indexOf('wood')
            if (index !== -1) {
                invList.splice(index, 1);
            }
            var index = invList.indexOf('wood')
            if (index !== -1) {
                invList.splice(index, 1);
            }
            campfire.style.display = 'none';
            invList.push('campfire');
            craftLvl++;
        } else {
            window.alert('You do not have enough materials!')
        }
    } else if (craftSelect == 'raft') {
        var index = tempInvList.indexOf('wood')
        if (index !== -1) {
            tempInvList.splice(index, 1);
        }
        if (tempInvList.includes('wood')) {
            var index = tempInvList.indexOf('wood');
            if (index !== -1) {
                invList.splice(index, 1);
            }
            if (tempInvList.includes('wood')) {
                var index = invList.indexOf('wood')
                if (index !== -1) {
                    invList.splice(index, 1);
                }
                var index = invList.indexOf('wood')
                if (index !== -1) {
                    invList.splice(index, 1);
                }
                var index = invList.indexOf('wood')
                if (index !== -1) {
                    invList.splice(index, 1);
                }
                raft.style.display = 'none';
                geese = document.createElement('div')
                geese.style.backgroundColor = 'blue';
            }
        } else {
            window.alert('You do not have enough materials!')
        }
    } else {
        window.alert('You must have something selected!')
    }
    craftSelect = ''
})

// yeah im not gonna lie i ran out of time and just am making things up for the points #onTheGrind

class superSecretThing {
    constructor(name, food) {
        this.name = name;
        this.food = food;
    }
}

headerText.addEventListener('click', () => {
    b = window.prompt("Whats your name?");
    a = window.prompt("What's your favorite food?");
    c = new superSecretThing(b, a);
    window.alert(`${c.name}'s favorite food is ${c.food}`);
})

headerText.addEventListener('mouseover', () => {
    purple = document.createElement('p');
    purple.textContent = 'yes';
    document.body.appendChild(purple);
})