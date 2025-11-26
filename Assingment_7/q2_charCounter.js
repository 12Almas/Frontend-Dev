const textBox = document.getElementById('textBox');
const counter = document.getElementById('counter');
const resetBtn = document.getElementById('resetBtn');
const maxChars = 100;

function updateCounter() {
    const currentLength = textBox.value.length;
    const remaining = maxChars - currentLength;

    counter.textContent = remaining;

    counter.className = '';
    textBox.classList.remove('danger');

    if (remaining <= 20 && remaining > 0) {
        counter.classList.add('warning');
    } else if (remaining === 0) {
        counter.classList.add('danger');
        textBox.classList.add('danger');
    }
}

textBox.addEventListener('keydown', (e) => {
    if (textBox.value.length >= maxChars && e.key !== 'Backspace' && e.key !== 'Delete') {
        e.preventDefault();
    }
});

textBox.addEventListener('input', updateCounter);

resetBtn.addEventListener('click', () => {
    textBox.value = '';
    updateCounter();
});