'use strict';
import '/source/styles/style.css';
import '/source/styles/styleHome.css';
import welcome from './login'


//page

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


for (let i = 0; i < 3; i++) {
    let navItems = ['Главная', 'Клиенты', 'Карта'];
    let href = ['#main', '#clients', '#map'];
    let classesLi = ['navigation-list-item active', 'navigation-list-item', 'navigation-list-item']
    let navigationListItem = document.createElement('li');
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
    container.append(content);
}

function tab(idConteiner, classTab, classPanel) {
    let tabs = [...document.querySelectorAll(classTab)],
        panels = [...document.querySelectorAll(classPanel)]
    document.getElementById(idConteiner).addEventListener('click', e => {
        let compareTab = tabs.filter(tab => tab === e.target.parentElement)
        if (e.target.parentElement === compareTab[0]) {
            let i = tabs.indexOf(e.target.parentElement)
            tabs.map(tab => tab.classList.remove('active'))
            tabs[i].classList.add('active')
            panels.map(panel => panel.classList.remove('active'))
            panels[i].classList.add('active')
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

json.forEach(((user) => {
    jsonUser = user.name;
    jsonCompany = user.company;
    jsonEmail = user.email;
    jsonPhone = user.phone;
    jsonBalance = user.balance;
    jsonDateOfReg = user.registered;
    arrayJson.push(jsonUser, jsonCompany, jsonEmail, jsonPhone, jsonBalance, jsonDateOfReg);
}));


let clients = document.querySelector('#clients');
let table = document.createElement('table');
table.setAttribute('border', '1');
clients.append(table);

for (let i = 0; i < 600; i++) {
    let header = ['Имя', 'Компания', 'Email', 'Телефон', 'Баланс', 'Дата регистрации'];
    let headTable = document.createElement('th');
    headTable.innerHTML = header[i];
    if (i < 6) {
        table.append(headTable);
    }
    let tr = document.createElement('tr');
    let td = document.createElement('td');

    // if (i % 6 === 0) {
    //     table.append(tr);

    // } else {
    //     td.innerHTML = arrayJson[i];
    //     tr.append(td);
    // }


    // if (i % 6 === 0) {
    //     let tr = document.createElement('tr');
    //     table.append(tr);
    //     let td = document.createElement('td');
    //     td.innerHTML = arrayJson[i];
    //     tr.append(td);
    // }


}
// for (let i = 0; i < 600; i++) {




// }
// welcome();