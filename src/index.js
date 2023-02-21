import homePage from './home-page.js';
import menuPage from './menu-page.js';
import contactPage from './contact-page.js';
import { foodPage, drinkPage } from './menu-page.js';

const content = document.getElementById('content');

const navBar = document.createElement('div');
navBar.classList.add('navBar');

const homeBtn = document.createElement('button');
homeBtn.textContent = 'Home';
homeBtn.setAttribute('id', 'homeBtn');
navBar.appendChild(homeBtn);

const menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
menuBtn.setAttribute('id', 'menuBtn');
navBar.appendChild(menuBtn);

const contactBtn = document.createElement('button');
contactBtn.textContent = 'Contact';
contactBtn.setAttribute('id', 'contactBtn');
navBar.appendChild(contactBtn);

content.appendChild(navBar);

homePage();
menuPage();
contactPage();
foodPage();
drinkPage();


