const form = document.getElementById('form');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === '') {
        setErrorFor(firstName, 'First name cannot be empty');
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, 'Last name cannot be empty');
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be empty');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Looks like this is not an email')
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty');
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error'
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
