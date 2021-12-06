'use strict';
const buttonRegistration = document.getElementsByTagName('button')[0];
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const checkboxCustom = document.getElementsByClassName('authorization__checkbox-custom')[0];
const errorRequiredFieldInputs = document.getElementsByClassName('required_field');
const errorRequiredFieldCheckbox = document.getElementsByClassName('required_field_checkbox')[0];
const errorInvalidEmail = document.getElementsByClassName('invalid_email')[0];
const errorShortPassword = document.getElementsByClassName('short_password')[0];
const stars = document.getElementsByTagName('span');
const labels = document.getElementsByTagName('label');
let checkForm;

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function becomeRed (input, message, star, label) {
    message.style.display = 'block';
    input.style.border = '3px solid #CB2424';
    if (label) {
    label.style.color = '#CB2424';
    }
    star.style.color = '#CB2424';
    checkForm = false;
}

function becomeNormal (input, message, star, label) {
    message.style.display = 'none';
    input.style.border = '2px solid #787878';
    if (label) {
        label.style.color = '#787878';
    }
    star.style.color = '#787878';
    checkForm = true;
}

buttonRegistration.addEventListener('click', (event) => {
    event.preventDefault();
    if (checkbox.checked === false) {
        becomeRed(checkboxCustom, errorRequiredFieldCheckbox, stars[2])
    }
    if (inputEmail.value.trim() === '') {
        inputEmail.value = '';
        becomeRed(inputEmail, errorRequiredFieldInputs[0], stars[0], labels[0])
    }
    if (inputPassword.value.trim() === '') {
        becomeRed(inputPassword, errorRequiredFieldInputs[1], stars[1], labels[1])
    }
    if (validateEmail(inputEmail.value) === false && inputEmail.value.trim() !== '') {
       becomeRed(inputEmail, errorInvalidEmail, stars[0], labels[0])
    }
    if (inputPassword.value.length < 8 && inputPassword.value.trim() !== '') {
        becomeRed(inputPassword, errorShortPassword, stars[1], labels[1])
    }
    if (checkForm === true) {
        const user = {
            email: inputEmail.value,
            password: inputPassword.value
        }
        console.log(user);
    }
})

inputEmail.addEventListener('input', () => {
    becomeNormal(inputEmail, errorInvalidEmail, stars[0], labels[0]);
    becomeNormal(inputEmail, errorRequiredFieldInputs[0], stars[0], labels[0])
})

inputPassword.addEventListener('input', () => {
   becomeNormal(inputPassword, errorRequiredFieldInputs[1], stars[1], labels[1])
    becomeNormal(inputPassword, errorShortPassword, stars[1], labels[1])
})

checkbox.addEventListener('click', () => {
    if (checkbox.checked === true) {
        becomeNormal(checkboxCustom, errorRequiredFieldCheckbox, stars[2])
    }
})


