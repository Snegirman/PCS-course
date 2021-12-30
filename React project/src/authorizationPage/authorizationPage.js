import React, {useEffect, useRef} from "react";
import './authorizationPage.css';


function AuthorizationPage (props) {
    let letEnter = useRef(false);

    useEffect(() => {
        const buttonRegistration = document.getElementsByTagName('button')[0],
            buttonEnter = document.getElementsByTagName('button')[1], inputEmail = document.getElementById('email'),
            inputPassword = document.getElementById('password'),
            errorRequiredFieldInputs = document.getElementsByClassName('required_field'),
            errorInvalidEmail = document.getElementsByClassName('invalid_email')[0],
            errorShortPassword = document.getElementsByClassName('short_password')[0],
            stars = document.getElementsByTagName('span'), labels = document.getElementsByTagName('label');
        let checkForm, users;

        function checkLocalStorage () {
            if (!localStorage.users) {
                users = [];
                users = JSON.stringify(users);
                localStorage.setItem('users', users);
            }
        }

        checkLocalStorage();

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
                let user = {
                    email: inputEmail.value,
                    password: inputPassword.value
                }

                users = JSON.parse(localStorage.getItem('users'));
                let checkReg = false;
                if (users.length > 0) {
                 for (let i = 0; i < users.length; i++) {
                    if (users[i].email === user.email) {
                        checkReg = true;
                    }
                 }
                }
                (checkReg === true) ? alert('Вы уже зарегистрированы!') : users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
            }
        })

        buttonEnter.addEventListener('click', (event) => {
            event.preventDefault();
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

                users = JSON.parse(localStorage.getItem('users'));
                    letEnter.current = false;
                for (let i = 0; i < users.length; i++) {
                    if (users[i].email === user.email && users[i].password === user.password) {
                        letEnter.current = true;
                    }
                }

                if (!letEnter.current && checkForm) {
                    alert('Вы не зарегистрированы! Зарегистрируйтесь, пожалуйста.');
                } else {
                    props.setLetIn(true);
                }
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

    }, [])

    return (
        <div className={'authorization-wrapper'}>
            <div className={'authorization-form'}>
                    <form>
                        <div className={'authorization__input-email'}>
                            <label htmlFor={'email'}>Email</label>
                            <span>*</span><input id={'email'} type={'email'} name={'e-mail'}
                                                 placeholder={'Введите электронную почту'}/>
                            <div className={'required_field'}>Поле обязательно для заполнения</div>
                            <div className={'invalid_email'}>Email невалидный</div>
                        </div>
                        <div className={'authorization__input-password'}>
                            <label htmlFor={'password'}>Пароль</label>
                            <span>*</span><input id={'password'} type={'password'} name={'password'}
                                                 placeholder={'Ведите пароль'}/>
                            <div className={'required_field'}>Поле обязательно для заполнения</div>
                            <div className={'short_password'}>Пароль должен содержать как минимум 8 символов</div>
                        </div>
                        <div className={'authorization__button-wrapper'}>
                            <button type={'submit'}>Регистрация</button>
                            <button type={'submit'}>Вход</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}
export default AuthorizationPage;