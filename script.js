const continueTextBtn = document.getElementById('continueTextBtn');
const statusText = document.getElementById('statusText');
const headerText = document.getElementById('headerText');

continueTextBtn.addEventListener('click', () => {
    headerText.style.display = 'none';
    statusText.style.display = 'block';
    continueTextBtn.textContent = 'Press to Continue';
})