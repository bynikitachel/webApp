'use strict';
import '/source/styles/style.css';


//page

//container
let container = document.createElement('div');
container.classList = 'container';
document.body.append(container);

//navigation
let navigation = document.createElement('div');
navigation.classList = 'navigation';
container.append(navigation);
let navigationList = document.createElement('ul');
navigationList.classList = 'navigationList';
navigation.append(navigationList);


for (let i = 0; i < 3; i++) {
    let navItems = ['Главная', 'Клиенты', 'Карта'];
    let navigationListItem = document.createElement('li');
    navigationListItem.innerHTML = navItems[i];
    navigationListItem.style.marginRight = '40px';
    navigationList.append(navigationListItem);
}
let exit = document.createElement('div');
exit.innerHTML = 'Выход';
exit.classList = 'exit';
navigation.append(exit);

window.onload = function() {
    //container for modal
    let login = document.createElement('div');
    login.classList = 'login';
    document.body.append(login);
    //form for login
    let loginForm = document.createElement('div');
    loginForm.classList = 'login-form';
    login.append(loginForm);
    let closeLogin = document.createElement('span');
    closeLogin.innerHTML = 'закрыть';
    closeLogin.classList = 'close-login';
    loginForm.append(closeLogin);
    let descriptionLogin = document.createElement('div');
    descriptionLogin.innerHTML = 'Прежде, чем войти, вам нужно зарегистрироваться или выйти!';
    descriptionLogin.classList = 'description-login';
    loginForm.append(descriptionLogin);
    //form
    let Form = document.createElement('form');
    loginForm.append(Form);
    //mail
    let descriptionEmail = document.createElement('div');
    descriptionEmail.innerHTML = 'Введите ваш E-mail:';
    Form.append(descriptionEmail);
    let inputEmail = document.createElement('input');
    Form.append(inputEmail);
    //pass
    let descriptionPass = document.createElement('div');
    descriptionPass.innerHTML = 'Введите ваш пароль:';
    Form.append(descriptionPass);
    let inputPassword = document.createElement('input');
    Form.append(inputPassword);


    closeLogin.onclick = function() {
        login.style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target == login) {
            login.style.display = "none";
        }
    }
}