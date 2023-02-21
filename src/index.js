import homePage from './home-page.js';
import menuPage from './menu-page.js';
import contactPage from './contact-page.js';

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

const homePageContent = document.querySelector('.homePageContent');
const menuContent = document.querySelector('.menuContent');
const contactContent = document.querySelector('.contactContent');

window.addEventListener('load', () => {
    menuContent.classList.add('hidden');
    contactContent.classList.add('hidden');
    homePageContent.classList.remove('hidden');
})

const homeBtnSelect = document.querySelector('#homeBtn');
homeBtnSelect.addEventListener('click', () => {
    menuContent.classList.add('hidden');
    contactContent.classList.add('hidden');
    homePageContent.classList.remove('hidden');
})

const menuBtnSelect = document.querySelector('#menuBtn');
menuBtnSelect.addEventListener('click', () => {
    homePageContent.classList.add('hidden');
    contactContent.classList.add('hidden');
    menuContent.classList.remove('hidden');
});

const contactBtnSelect = document.querySelector('#contactBtn');
contactBtnSelect.addEventListener('click', () => {
    homePageContent.classList.add('hidden');
    menuContent.classList.add('hidden');
    contactContent.classList.remove('hidden');
})


