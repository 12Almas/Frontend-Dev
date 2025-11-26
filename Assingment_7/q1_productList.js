const input = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('productList');

addBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (text) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${text}</span> <button class="edit">Edit</button> <button class="delete">Delete</button>`;
        list.appendChild(li);
        input.value = '';
    }
});

list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    } else if (e.target.classList.contains('edit')) {
        const li = e.target.parentElement;
        const span = li.querySelector('span');
        const currentText = span.textContent;

        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = currentText;

        li.replaceChild(inputField, span);
        inputField.focus();

        const save = () => {
            const newText = inputField.value.trim() || currentText;
            const newSpan = document.createElement('span');
            newSpan.textContent = newText;
            if (li.contains(inputField)) {
                li.replaceChild(newSpan, inputField);
            }
        };

        inputField.addEventListener('blur', save);
        inputField.addEventListener('keypress', (ev) => {
            if (ev.key === 'Enter') save();
        });
    }
});