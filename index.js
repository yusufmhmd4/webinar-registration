let userDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''

};

const modal = document.getElementById('modal');
const submitForm = document.getElementById('submit');
const errMsg = 'Please complete this required field.';


function validateInput(input, errorElement) {
    if (input.value !== '') {
        errorElement.textContent = '';
        input.style.borderColor = '#cbd6e2';
    } else {
        errorElement.textContent = errMsg;
        input.style.borderColor = 'red';
    }
    userDetails[input.id] = input.value;
}


const firstName = document.getElementById('firstName');
const errFirstName = document.getElementById('errFirstName');
firstName.addEventListener('blur', function() {
    validateInput(firstName, errFirstName);
});

const lastName = document.getElementById('lastName');
const errLastName = document.getElementById('errLastName');
lastName.addEventListener('blur', function() {
    validateInput(lastName, errLastName);
});

function validateEmailInput(email, errEmail) {
    const emailValue = email.value.trim().toLowerCase();
    if (emailValue.endsWith('gmail.com')) {
        errEmail.textContent = 'Please enter your business email address. This form does not accept addresses from gmail.com.';
        email.style.borderColor = 'red';
    }
}
const email = document.getElementById('email');
const errEmail = document.getElementById('errEmail');
email.addEventListener('blur', function() {
    validateInput(email, errEmail);
    validateEmailInput(email, errEmail);
});



const phoneNumber = document.getElementById('phoneNumber');
const errPhoneNumber = document.getElementById('errPhoneNumber');
phoneNumber.addEventListener('blur', function() {
    validateInput(phoneNumber, errPhoneNumber);
});


const closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', function() {
    modal.classList.add('display');
    errFirstName.textContent = '';
    firstName.style.borderColor = '#cbd6e2';
    errLastName.textContent = '';
    lastName.style.borderColor = '#cbd6e2';
    errEmail.textContent = '';
    email.style.borderColor = '#cbd6e2';
    errPhoneNumber.textContent = '';
    phoneNumber.style.borderColor = '#cbd6e2';
});


function register() {
    modal.classList.remove('display');
}


function registrationSuccess() {
    submitForm.innerHTML = '<p class="success">Successfully Registered</p>';
    console.log(userDetails);
}

submitForm.addEventListener('submit', function(e) {
    e.preventDefault();

    validateInput(firstName, errFirstName);
    validateInput(lastName, errLastName);
    validateInput(email, errEmail);
    validateEmailInput(email, errEmail);
    validateInput(phoneNumber, errPhoneNumber);

    if (errFirstName.textContent === '' && errLastName.textContent === '' && errEmail.textContent === '' && errPhoneNumber.textContent === '') {
        registrationSuccess();
    }
});