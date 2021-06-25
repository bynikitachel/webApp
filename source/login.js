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
    closeLogin.classList = 'close-login';
    loginForm.append(closeLogin);
    let descriptionLogin = document.createElement('p');
    descriptionLogin.innerHTML = 'Прежде, чем войти, вам нужно зарегистрироваться!';
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
    inputEmail.required = '1';
    Form.append(inputEmail);
    //pass
    let descriptionPass = document.createElement('div');
    descriptionPass.innerHTML = 'Введите ваш пароль:';
    descriptionPass.classList = 'description-form';
    Form.append(descriptionPass);
    let inputPassword = document.createElement('input');
    inputPassword.required = '1';
    inputPassword.style.marginBottom = '20px';
    inputPassword.type = 'password'
    Form.append(inputPassword);

    let btnLogin = document.createElement('button');
    btnLogin.innerHTML = 'Войти';
    btnLogin.classList = 'btn-login';
    btnLogin.type = 'submit';
    Form.append(btnLogin);
    let btnSign = document.createElement('button');
    btnSign.innerHTML = 'Зарегистрирваться';
    btnSign.classList = 'btn-sign';
    Form.append(btnSign);

    closeLogin.onclick = function() {
        login.style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target === login) {
            login.style.display = "none";
        }
    }
    const newUser = { mail, pass };
    const regUsers = localStorage.getItem('RegisteredUsers');
    if (regUsers) {
        regUsers.push(newUser);
        localStorage.setItem(regUser);
    } else {
        localStorage.setItem('RegisteredUsers', [newUser]);
    }

    let users = [];
    btnSign.onclick = function(event) {
        users.push(Form.elements[0].value + ' ' + Form.elements[1].value);
        localStorage.setItem('inputEmail', inputEmail.value);
        localStorage.setItem('inputPassword', inputPassword.value);
        // event.preventDefault();
        if (inputEmail.value.length == 0 || inputPassword.value.length == 0) {
            btnSign.disabled = 'true';
        } else {
            loginForm.style.display = 'none';
            let loginDone = document.createElement('div');
            loginDone.innerHTML = 'Вы успешно зарегистрировались!';
            loginDone.classList = 'login-done';
            login.append(loginDone);
            loginDone.append(closeLogin);
        }
    }
    btnLogin.onclick = function(event) {
        let storedEmail = localStorage.getItem('inputEmail');
        let storedPass = localStorage.getItem('inputPassword');
        if (inputEmail.value == storedEmail && inputPassword.value == storedPass) {
            // loginForm.style.display = 'none';
            let loginDone = document.createElement('div');
            loginDone.innerHTML = 'Вы уже вошли!';
            loginDone.classList = 'login-done';

            let loginDoneS = document.querySelector('.login-done');
            console.log(loginDoneS)
            if (loginDoneS === null) {
                login.append(loginDone);
                loginDone.append(closeLogin);
            } else {

            }

        } else {

        }
    }

}