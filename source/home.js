'use strict';
import '/source/styles/style.css';
import welcome from './login'


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
console.log(1231231);
welcome();