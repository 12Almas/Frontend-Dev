function showStep(stepId) {
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    document.getElementById(stepId).classList.add('active');
}

function nextStep(currentStep) {
    let valid = false;
    if (currentStep === 1) {
        const name = document.getElementById('nameInput').value;
        if (name.trim() !== "") valid = true;
    } else if (currentStep === 2) {
        const email = document.getElementById('emailInput').value;
        if (email.includes('@')) valid = true;
    }

    if (valid) {
        showStep('step' + (currentStep + 1));
    } else {
        alert("Invalid input");
    }
}

function prevStep(currentStep) {
    showStep('step' + (currentStep - 1));
}

function submitForm() {
    const pass = document.getElementById('passInput').value;
    if (pass.length > 0) {
        const name = document.getElementById('nameInput').value;
        const email = document.getElementById('emailInput').value;
        document.getElementById('summaryText').innerHTML = `Name: ${name}<br>Email: ${email}`;
        showStep('summary');
    } else {
        alert("Enter password");
    }
}