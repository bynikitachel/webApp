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
let Date = [];
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
// console.log(jsonBalance);

for (let i = 0; i < jsonBalance.length; i++) {
    strBalance = jsonBalance[i].split('');
    strBalance.splice(0, 1);
    strBalance.splice(1, 1);
    arrBalance = strBalance.join('');
    newBalance.push(arrBalance);
    MaxBalance = Math.max.apply(null, newBalance);
}


let header = ['Имя', 'Компания', 'Email', 'Телефон', 'Баланс', 'Дата регистрации'];

const fields = ['name', 'company', 'email', 'phone', 'balance'];
// const fields = [jsonUser, jsonCompany, jsonEmail, jsonPhone, jsonBalance, newDate];

let clients = document.querySelector('#clients');
let statistic = document.createElement('ul');
statistic.classList = 'statistic';
statistic.innerHTML = 'Некоторая статистика по клиентам:';
clients.append(statistic);

function generate_table(users) {
    const tbl = document.createElement("table");
    tbl.style.width = '95%';
    const tblBody = document.createElement("tbody");
    const tableHead = document.createElement("tr");
    tableHead.classList = 'table-head';
    for (let k = 0; k < header.length; k++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(header[k]);
        cell.appendChild(cellText);
        tableHead.appendChild(cell);
    }
    tbl.appendChild(tableHead);

    // creating all cells
    users.forEach(e => {
        let row = document.createElement("tr");

        for (let j = 0; j < fields.length + 1; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            let cell = document.createElement("td");
            let cell1 = document.createElement("td");
            cell.classList = 'cell';
            if (e.isActive === false) {
                cell.style.background = 'gray';
                cell.style.color = '#fff';
            }
            if (j === fields.length) {
                if (e.gender === 'male') {
                    mans++;
                } else if (e.gender === 'female') {
                    womans++;
                }
                Date.push(e.registered);
                for (let i = 0; i < Date.length; i++) {
                    strDate = Date[i].split('');
                    strDate.splice(10, 16);
                    // let nDate = new Date();
                    arrDate.push(strDate.join(''));
                }
            }
            // let a = [1, 2];
            let cellText = document.createTextNode(e[fields[j]]);
            // let cell1Text = document.createTextNode(a[j]);

            cell.appendChild(cellText);
            row.appendChild(cell);
            // cell1.appendChild(cell1Text);
            // row.appendChild(cell1);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    })

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    clients.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    // tbl.setAttribute("border", "2");
}
generate_table(json);
console.log(arrDate);
let goUp = document.createElement('button');
goUp.innerHTML = 'К началу страницы';
goUp.classList = 'go-up';
clients.append(goUp);

goUp.onclick = function() {
    window.scrollTo(0, 0);
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

// welcome();