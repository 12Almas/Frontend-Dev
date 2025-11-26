const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('pass');
const successMsg = document.getElementById('successMsg');

function validate() {
    let valid = true;

    if (nameInput.value.trim() === '') {
        document.getElementById('nameErr').style.display = 'inline';
        valid = false;
    }

    if (!emailInput.value.includes('@') || emailInput.value.trim() === '') {
        document.getElementById('emailErr').style.display = 'inline';
        valid = false;
    }

    if (passInput.value.length < 6) {
        document.getElementById('passErr').style.display = 'inline';
        valid = false;
    }

    return valid;
}

form.addEventListener('submit', (e) => {
    successMsg.style.display = 'none';
    const isValid = validate();

    if (!isValid) {
        e.preventDefault();
    } else {
        e.preventDefault();
        successMsg.style.display = 'block';
        form.reset();
    }
});

[nameInput, emailInput, passInput].forEach(input => {
    input.addEventListener('input', (e) => {
        const span = e.target.nextElementSibling;
        if (span) span.style.display = 'none';
    });
});