window.onload = function(event) {
    event.preventDefault();
    //container for modal
    let login = document.createElement('div');
    login.classList = 'login';
    document.body.append(login);
    //form for login
    let loginForm = document.createElement('div');
    loginForm.classList = 'login-form';
    login.append(loginForm);
    let closeLogin = document.createElement('span');
    closeLogin.classList = 'close-login';
    let descriptionLogin = document.createElement('p');
    descriptionLogin.innerHTML = 'Прежде, чем получить доступ к сайту, вам нужно авторизироваться!';
    descriptionLogin.classList = 'description-login';
    loginForm.append(descriptionLogin);
    //form
    let Form = document.createElement('form');
    Form.classList = 'Form';
    loginForm.append(Form);
    //mail
    let descriptionEmail = document.createElement('div');
    descriptionEmail.innerHTML = 'Введите ваш E-mail:';
    descriptionEmail.classList = 'description-form';
    Form.append(descriptionEmail);
    let inputEmail = document.createElement('input');
    inputEmail.placeholder = 'Почта';
    inputEmail.required = '1';
    Form.append(inputEmail);

    let formatMailErrorWindow = document.createElement('div');

    function appendError() {
        formatMailErrorWindow.innerHTML = 'Неверный формат Email';
        formatMailErrorWindow.classList = 'format-mail-error-window';
        Form.append(formatMailErrorWindow);
    }
    appendError();



    //pass
    let descriptionPass = document.createElement('div');
    descriptionPass.innerHTML = 'Введите ваш пароль:';
    descriptionPass.classList = 'description-form';
    Form.append(descriptionPass);
    let inputPassword = document.createElement('input');
    inputPassword.placeholder = 'Пароль';
    inputPassword.required = '1';
    // inputPassword.style.marginBottom = '20px';
    inputPassword.type = 'password'
    Form.append(inputPassword);

    let invalidDataMessage = document.createElement('div');

    function ivalidData() {
        invalidDataMessage.innerHTML = 'Неверный логин или пароль';
        invalidDataMessage.classList = 'invalid-data-message';
        Form.append(invalidDataMessage);
    }
    ivalidData();

    let btnLogin = document.createElement('button');
    btnLogin.innerHTML = 'Войти';
    btnLogin.classList = 'btn-login';
    btnLogin.type = 'submit';
    btnLogin.disabled = 'true';
    Form.append(btnLogin);
    let btnSign = document.createElement('button');
    btnSign.type = 'submit';
    btnSign.disabled = 'true';
    btnSign.innerHTML = 'Зарегистрироваться';
    btnSign.classList = 'btn-sign';
    Form.append(btnSign);

    closeLogin.onclick = function() {
        login.style.display = 'none';
    }

    for (let i = 0; i < document.querySelectorAll('input').length; i++) {
        document.querySelectorAll('input')[i].onkeyup = function() {
            if (inputEmail.value === '' || inputPassword.value === '') {
                btnSign.setAttribute('disabled', true);
                btnLogin.setAttribute('disabled', true);
            } else {
                btnSign.removeAttribute('disabled');
                btnLogin.removeAttribute('disabled');
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
            console.log('ты pidor')
            formatMailErrorWindow.style.display = 'block';
            return 0;
        }
    }

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

        loginForm.style.display = 'none';
        let loginDone = document.createElement('div');
        loginDone.innerHTML = 'Вы успешно зарегистрировались!';
        loginDone.classList = 'login-done';
        login.append(loginDone);
        loginDone.append(closeLogin);
    }
    btnLogin.onclick = function(event) {
        event.preventDefault();
        let users = JSON.parse(localStorage.getItem('RegisteredUsers'));
        console.log(users);
        let chekedUser = users.find((e) => e.mail === inputEmail.value && e.pass === inputPassword.value);
        if (chekedUser) {
            localStorage.setItem('loggedIn', true)
            loginForm.style.display = 'none';
            let loginDone = document.createElement('div');
            loginDone.innerHTML = 'Вы успешно вошли!';
            loginDone.classList = 'login-done';
            login.append(loginDone);
            loginDone.append(closeLogin);
        } else {
            invalidDataMessage.style.display = 'block';
        }
        let loggedIn = localStorage.getItem('loggedIn');
        if (loggedIn === true) {

        }

    }
}