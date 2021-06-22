window.onload = function () {
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
    Form.append(inputEmail);
    //pass
    let descriptionPass = document.createElement('div');
    descriptionPass.innerHTML = 'Введите ваш пароль:';
    descriptionPass.classList = 'description-form';
    Form.append(descriptionPass);
    let inputPassword = document.createElement('input');
    inputPassword.style.marginBottom = '20px';
    inputPassword.type = 'password'
    Form.append(inputPassword);

    let btnLogin = document.createElement('button');
    btnLogin.innerHTML = 'Войти';
    btnLogin.classList = 'btn-login';
    Form.append(btnLogin);
    let btnSign = document.createElement('button');
    btnSign.innerHTML = 'Зарегистрирваться';
    btnSign.classList = 'btn-sign';

    Form.append(btnSign);

    closeLogin.onclick = function () {
        login.style.display = 'none';
    }
    window.onclick = function (event) {
        if (event.target == login) {
            login.style.display = "none";
        }
    }
    let users = [];
    btnSign.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('form', Form.elements);

        users.push(Form.elements[0].value + ' ' + Form.elements[1].value)
        console.log(users);
    })
    // console.log(users);
}