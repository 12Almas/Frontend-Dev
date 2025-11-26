function setTheme(theme) {
    document.body.setAttribute('class', theme);
    document.body.setAttribute('data-theme', theme);
}

document.getElementById('lightBtn').addEventListener('click', () => setTheme('light'));
document.getElementById('darkBtn').addEventListener('click', () => setTheme('dark'));
document.getElementById('blueBtn').addEventListener('click', () => setTheme('blue'));