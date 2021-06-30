import * as login from './login';

import '/src/styles/styleLogin.css';
import '/src/styles/styleHome.css';


// import * as home from './home';

//container
let container = document.createElement('div');
container.classList = 'container';
document.body.append(container);

//navigation
let navigation = document.createElement('div');
navigation.classList = 'navigation';
navigation.id = 'navigation';
container.append(navigation);
let navigationList = document.createElement('ul');
navigationList.classList = 'navigationList';
navigation.append(navigationList);

let containerContent = document.createElement('div');
containerContent.style.height = 'calc(100% - 183px)';
containerContent.style.background = '#fff';
containerContent.style.margin = '0 50px 0px 50px';
containerContent.style.padding = '40px 0 40px 0';
container.append(containerContent);

for (let i = 0; i < 3; i++) {
    let navItems = ['Главная', 'Клиенты', 'Карта'];
    let href = ['#main', '#clients', '#map'];
    let classesLi = ['navigation-list-item active', 'navigation-list-item', 'navigation-list-item']
    let navigationListItem = document.createElement('li');
    if (i === 1) {
        navigationListItem.id = 'item-cients';
    }
    let aNav = document.createElement('a');
    aNav.innerHTML = navItems[i];
    aNav.href = href[i];
    navigationListItem.classList = classesLi[i];
    navigationList.append(navigationListItem);
    navigationListItem.append(aNav);



    let content = document.createElement('div');
    let classesDiv = ['navigation-content active', 'navigation-content', 'navigation-content'];
    let idDiv = ['main', 'clients', 'map'];
    content.classList = classesDiv[i];
    content.id = idDiv[i];
    containerContent.append(content);
}

function tab(idConteiner, classTab, classPanel) {
    let tabs = [...document.querySelectorAll(classTab)],
        panels = [...document.querySelectorAll(classPanel)]

    document.getElementById(idConteiner).addEventListener('click', function(e) {
        e.preventDefault();
        let compareTab = tabs.filter(tab => tab === e.target.parentElement)
        if (e.target.parentElement === compareTab[0]) {
            let i = tabs.indexOf(e.target.parentElement)
            tabs.map(tab => tab.classList.remove('active'))
            tabs[i].classList.add('active')
            panels.map(panel => panel.classList.remove('active'))
            panels[i].classList.add('active')
            if (tabs[i].id === 'item-cients') {
                document.body.style.height = 'initial';
                container.style.height = 'initial';
            } else {
                document.body.style.height = '100vh';
                container.style.height = 'calc(100% - 80px)';
            }
        }
    })

}
tab('navigation', '.navigation-list-item', '.navigation-content')



let exit = document.createElement('div');
exit.innerHTML = 'Выход';
exit.classList = 'exit';
navigation.append(exit);




let url = 'https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json';
let response = await fetch(url);
let json = await response.json();

let jsonUser = [];
let jsonCompany = [];
let jsonEmail = [];
let jsonPhone = [];
let jsonBalance = [];
let jsonDateOfReg = [];
let arrayJson = [];
let mans = 0;
let womans = 0;
let MaxBalance = 0;
let arrBalance = [];
let strBalance;
let arrDate = [];
let strDate;
let newBalance = [];
let newDate = [];

json.forEach(((user) => {
    jsonUser = user.name;
    jsonCompany = user.company;
    jsonEmail = user.email;
    jsonPhone = user.phone;
    jsonBalance.push(user.balance);
    // jsonDateOfReg = user.registered;


}));
let main = document.querySelector('#main');
main.innerHTML = 'Добро пожаловать на ...!)';
let device = document.createElement('div');
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    device.innerHTML = 'Вы вошли через мобильное устройство';
} else {
    device.innerHTML = 'Вы вошли через компьютер';
}
main.append(device);

let clients = document.querySelector('#clients');
let statistic = document.createElement('ul');
statistic.classList = 'statistic';
statistic.innerHTML = 'Некоторая статистика по клиентам:';
clients.append(statistic);

for (let i = 0; i < jsonBalance.length; i++) {
    strBalance = jsonBalance[i].split('');
    strBalance.splice(0, 1);
    strBalance.splice(1, 1);
    arrBalance = strBalance.join('');
    newBalance.push(arrBalance);
    MaxBalance = Math.max.apply(null, newBalance);
}

let header = ['Номер п/п', 'Имя', 'Компания', 'Email', 'Телефон', 'Баланс', 'Дата регистрации'];

const fields = ['numbers', 'name', 'company', 'email', 'phone', 'balance', 'registered', 'button'];

function generateTable(users) {
    const tbl = document.createElement("table");
    tbl.style.width = '100%';
    tbl.style.margin = '0 auto'
    const tblBody = document.createElement("tbody");
    const tableHead = document.createElement("tr");
    // tableHead.classList = 'table-head';
    for (let k = 0; k < header.length; k++) {
        const cell = document.createElement("td");
        cell.classList = 'table-head';
        const cellText = document.createTextNode(header[k]);
        cell.appendChild(cellText);
        tableHead.appendChild(cell);
    }
    tbl.appendChild(tableHead);
    // creating all cells
    users.forEach((e, index) => {
            let row = document.createElement("tr");
            row.id = index;
            if (e.gender === 'male') {
                mans++;
            } else if (e.gender === 'female') {
                womans++;
            }
            for (let j = 0; j < fields.length; j++) {
                let cell = document.createElement("td");
                cell.classList = 'cell';
                if (e.isActive === false) {
                    cell.style.background = 'gray';
                    cell.style.color = '#fff';
                }
                let content;
                if (fields[j] === 'numbers') {
                    cell.append(index + 1);
                }
                if (fields[j] === 'registered') {
                    const formattedDate = e[fields[j]].split(/\s/).join('')
                    const date = new Date(`${formattedDate}`)
                    content = document.createTextNode(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);
                } else if (fields[j] === 'button') {
                    cell.classList = 'cell cell-button';
                    // cell.style.display = 'flex';
                    cell.style.height = '100%';
                    // cell.style.padding = '0';
                    content = document.createElement('button');
                    content.innerHTML = 'x';
                    content.className = `remove-row-${index} content-button`;
                    if (row.lastChild.style.background === 'gray') {
                        content.style.background = 'gray';
                        // content.style.padding = '10px';
                    } else {
                        content.style.background = '#f8e391';
                    }
                    content.addEventListener('click', () => {
                        let containerDelRow = document.createElement('div');
                        containerDelRow.classList = 'login';
                        document.body.append(containerDelRow);
                        let DelRow = document.createElement('div');
                        DelRow.classList = 'login-form';
                        DelRow.innerHTML = 'Вы действительно хотите удалить информацию о пользователе ' + e.name + '?';
                        containerDelRow.append(DelRow);
                        let containerDelRowButton = document.createElement('div');
                        DelRow.append(containerDelRowButton);
                        for (let i = 0; i < 2; i++) {
                            let DelRowButton = document.createElement('button');
                            if (i === 0) {
                                DelRowButton.innerHTML = 'Подтвердить';
                                DelRowButton.classList = 'del-row-button-ok';
                                // DelRowButton.style.marginRight = '20px';
                                DelRowButton.onclick = function() {
                                    document.getElementById(index).remove();
                                    containerDelRow.style.display = 'none';

                                    let info = document.createElement('div');
                                    info.innerHTML = 'Данные о пользователе удалены';
                                    info.classList = 'info';

                                    let closeinfo = document.createElement('span');
                                    closeinfo.classList = 'close-info';
                                    info.append(closeinfo);
                                    clients.append(info);
                                    // closeinfo.onclick() = function() {
                                    //     info.style.display = 'none';
                                    // }

                                    function infoHide() {
                                        info.style.display = 'none';
                                    }
                                    setTimeout(infoHide, 2000)
                                }
                            } else if (i === 1) {
                                DelRowButton.innerHTML = 'Отмена';
                                DelRowButton.classList = 'del-row-button-no';
                                DelRowButton.onclick = function() {
                                    containerDelRow.style.display = 'none';
                                }
                            }
                            containerDelRowButton.append(DelRowButton);
                        }
                        window.onclick = function(event) {
                            if (event.target === containerDelRow) {
                                containerDelRow.style.display = "none";
                            }
                        }
                    })
                } else {
                    content = document.createTextNode(e[fields[j]]);
                }
                if (fields[j] === 'numbers') {} else {
                    cell.appendChild(content);
                }

                row.appendChild(cell);
            }
            // add the row to the end of the table body
            tblBody.appendChild(row);
        })
        // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    clients.appendChild(tbl);
    // sets the border attribute of tbl to 2;
}
generateTable(json);
let goUp = document.createElement('button');
goUp.innerHTML = 'К началу страницы';
goUp.classList = 'go-up';
clients.append(goUp);

goUp.onclick = function() {
    window.scrollTo(0, 0);
    // clients.scrollTo(0, 0);
}

for (let i = 0; i < 3; i++) {
    let statisticItem = document.createElement('li');
    if (i === 0) {
        statisticItem.innerHTML = 'Мужчин: ' + mans;
    } else if (i === 1) {
        statisticItem.innerHTML = 'Женщин: ' + womans;
    } else {
        statisticItem.innerHTML = 'Наибольший баланс: ' + '$' + MaxBalance;
    }

    statistic.append(statisticItem);
}


let maps = document.querySelector('#map');

let iframe = document.createElement('iframe');
iframe.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63252.14515962143!2d27.59535414597395!3d53.90292384772611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1624611767122!5m2!1sru!2sby");
iframe.setAttribute('width', '100%');
iframe.setAttribute('height', '100%');
iframe.style.border = 'none';
maps.append(iframe);

let markers = document.createElement('script');
markers.setAttribute('src', "https://maps.googleapis.com/maps/api/js?key=AIzaSyDfkRDgZsgxKYS5UNpB_zUnKIKR3oHkPuM&callback=initMap&libraries=&v=weekly");
markers.setAttribute('async', '');
maps.append(markers);
// welcome();
// map();