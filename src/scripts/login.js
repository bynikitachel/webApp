window.onload = function(event) {
    event.preventDefault();

    //function of creating elements
    let _ = undefined;

    function createElement(name, attrs, style, text, past_id, position) {
        let parent = document.getElementsByTagName('BODY')[0];
        let e = document.createElement(name);
        if (attrs) {
            for (key in attrs) {
                if (key == 'class') {
                    e.className = attrs[key];
                } else if (key == 'id') {
                    e.id = attrs[key];
                } else {
                    e.setAttribute(key, attrs[key]);
                }
            }
        }
        if (style) {
            for (key in style) {
                e.style[key] = style[key];
            }
        }
        if (text) {
            e.appendChild(document.createTextNode(text));
        }
        parent.appendChild(e);
        if (past_id) {
            let old_elem = document.getElementById(past_id);
            if (position == 'before') {
                parent.insertBefore(e, old_elem)
            } else if (position == 'after') {
                old_elem.append(e);
            }
        }
        // variable = e;
        // return variable;
    }

    //container for modal
    createElement('div', { 'class': 'container-login', 'id': 'container-login' }, _, _, 'body', 'after');

    //form for login
    createElement('div', { 'class': 'login-form', 'id': 'login-form' }, _, _, 'container-login', 'after'); //
    createElement('span', { 'class': 'close-login' }, { 'display': 'none' }, _, 'login-form', 'after');
    createElement('p', { 'class': 'description-login' }, _, 'Прежде, чем получить доступ к сайту, вам нужно авторизироваться!', 'login-form', 'after');

    //form
    createElement('form', { 'class': 'Form', 'id': 'Form' }, _, _, 'login-form', 'after');

    //mail
    createElement('div', { 'class': 'description-form' }, _, 'Введите ваш E-mail:', 'Form', 'after');
    createElement('input', { 'class': 'input-mail', 'placeholder': 'Почта', 'required': '1' }, _, _, 'Form', 'after');

    let formatMailErrorWindow = document.createElement('div');

    function appendError() {
        formatMailErrorWindow.innerHTML = 'Неверный формат Email';
        formatMailErrorWindow.classList = 'format-mail-error-window';
        Form.append(formatMailErrorWindow);
    }
    appendError();

    //pass
    createElement('div', { 'class': 'description-form' }, _, 'Введите ваш пароль:', 'Form', 'after');
    createElement('input', { 'class': 'input-pass', 'placeholder': 'Пароль', 'required': '1', 'type': 'password' }, _, _, 'Form', 'after');

    let invalidDataMessage = document.createElement('div');

    function ivalidData() {
        invalidDataMessage.innerHTML = 'Неверный логин или пароль';
        invalidDataMessage.classList = 'invalid-data-message';
        Form.append(invalidDataMessage);
    }
    ivalidData();

    //buttons
    createElement('button', { 'class': 'btn-login', 'type': 'submit', 'disabled': 'true' }, _, 'Войти', 'Form', 'after');
    createElement('button', { 'class': 'btn-sign', 'type': 'submit', 'disabled': 'true' }, _, 'Зарегистрироваться', 'Form', 'after');

    let loginForm = document.querySelector('.login-form');
    let closeLogin = document.querySelector('.close-login');
    let containerLogin = document.querySelector('.container-login');

    //empty inputs
    let btnLogin = document.querySelector('.btn-login');
    let btnSign = document.querySelector('.btn-sign');

    let inputEmail = document.querySelector('.input-mail');
    let inputPassword = document.querySelector('.input-pass');

    for (let i = 0; i < document.querySelectorAll('input').length; i++) {
        document.querySelectorAll('input')[i].onkeyup = function() {
            if (inputEmail.value === '' || inputPassword.value === '') {
                btnSign.setAttribute('disabled', true);
                btnLogin.setAttribute('disabled', true);
            } else {
                btnSign.removeAttribute('disabled');
                btnLogin.removeAttribute('disabled');
                invalidDataMessage.style.display = 'none';
                formatMailErrorWindow.style.display = 'none';
            }
        }
    }


    //registration

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function formatMailError() {
        if (validateEmail(inputEmail.value)) {} else {
            formatMailErrorWindow.style.display = 'block';
            return 0;
        }
    }

    let loginDone = document.createElement('div');

    btnSign.onclick = function(event) {
        event.preventDefault();

        formatMailError();
        if (formatMailError() === 0) {
            return;
        }

        const newUser = { mail: this.mail, pass: this.pass };
        newUser.mail = inputEmail.value;
        newUser.pass = inputPassword.value;

        let regUsers = [];
        regUsers = JSON.parse(localStorage.getItem('RegisteredUsers'));
        if (regUsers) {
            regUsers.push(newUser);
            localStorage.setItem('RegisteredUsers', JSON.stringify(regUsers));
        } else {
            regUsers = [newUser];
            localStorage.setItem('RegisteredUsers', JSON.stringify(regUsers));
        }

        // loginForm.style.display = 'none';
        // let loginDone = document.createElement('div');
        loginDone.innerHTML = 'Вы успешно зарегистрировались!';
        loginDone.classList = 'login-done';
        containerLogin.append(loginDone);
        closeLogin.style.display = 'block';
        loginDone.append(closeLogin);

        closeLogin.onclick = function() {
            loginDone.style.display = 'none';
        }
    }

    btnLogin.onclick = function(event) {
        event.preventDefault();
        let users = JSON.parse(localStorage.getItem('RegisteredUsers'));
        console.log(users);
        let chekedUser = users.find((e) => e.mail === inputEmail.value && e.pass === inputPassword.value);
        if (chekedUser) {
            localStorage.setItem('loggedIn', true)


            loginForm.style.display = 'none';
            // let loginDone = document.createElement('div');
            loginDone.innerHTML = 'Вы успешно вошли!';
            loginDone.classList = 'login-done';
            containerLogin.append(loginDone);
            closeLogin.style.display = 'block';
            loginDone.append(closeLogin);
        } else {
            invalidDataMessage.style.display = 'block';
        }
        let loggedIn = localStorage.getItem('loggedIn');
        if (loggedIn === true) {}
        closeLogin.onclick = function() {
            containerLogin.style.display = 'none';
        }
    }
}