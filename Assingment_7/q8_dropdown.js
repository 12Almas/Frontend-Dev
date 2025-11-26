const dropBtn = document.getElementById('dropBtn');
const options = document.getElementById('options');
const dropdown = document.getElementById('dropdown');

dropBtn.addEventListener('click', (e) => {
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
});

options.addEventListener('click', (e) => {
    if (e.target.classList.contains('option')) {
        dropBtn.textContent = e.target.textContent;
        options.style.display = 'none';
    }
});

document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        options.style.display = 'none';
    }
}, true);