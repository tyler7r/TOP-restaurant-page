import homePage from './home-page.js';
import menuPage from './menu-page.js';
import contactPage from './contact-page.js';

const content = document.getElementById('content');

const navBar = document.createElement('div');
navBar.classList.add('navBar');

const restaurantTitle = document.createElement('div');
restaurantTitle.textContent = 'The Atlannuh';
restaurantTitle.setAttribute('id', 'restaurantTitle');
navBar.appendChild(restaurantTitle);

const navBtns = document.createElement('div');
navBtns.classList.add('navBtns');

const homeBtn = document.createElement('button');
homeBtn.textContent = 'Home';
homeBtn.setAttribute('id', 'homeBtn');
navBtns.appendChild(homeBtn);

const menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
menuBtn.setAttribute('id', 'menuBtn');
navBtns.appendChild(menuBtn);

const contactBtn = document.createElement('button');
contactBtn.textContent = 'Contact';
contactBtn.setAttribute('id', 'contactBtn');
navBtns.appendChild(contactBtn);

navBar.appendChild(navBtns);

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


