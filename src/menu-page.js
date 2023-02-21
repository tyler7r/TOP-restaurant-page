const menuContent = document.createElement('div');

export default function menuPage() {
    const content = document.getElementById('content');

    menuContent.classList.add('menuContent');

    const menuNav = document.createElement('div');
    menuNav.classList.add('menuNav');

    const foodBtn = document.createElement('button');
    foodBtn.textContent = 'Food'
    menuNav.appendChild(foodBtn);

    const drinksBtn = document.createElement('button');
    drinksBtn.textContent = 'Drinks';
    menuNav.appendChild(drinksBtn)

    menuContent.appendChild(menuNav);

    content.appendChild(menuContent);

    foodPage();
}

function drinkPage() {
    const drinksContent = document.createElement('div');
    drinksContent.classList.add('drinksContent');

    const icedTea = document.createElement('div');
    icedTea.classList.add('icedTea');
    const icedTeaPic = document.createElement('img');
    icedTeaPic.setAttribute('id', 'icedTeaPic');
    icedTeaPic.src = 'icedTea.jpg';
    icedTea.appendChild(icedTeaPic);
    const icedTeaDescription = document.createElement('div');
    icedTeaDescription.setAttribute('id', 'icedTeaDescription');
    icedTeaDescription.textContent = "A friendly reminder that we are in the South. $3"
    icedTea.appendChild(icedTeaDescription);

    drinksContent.appendChild(icedTea);

    menuContent.appendChild(drinksContent);
}

function foodPage() {
    const foodContent = document.createElement('div');
    foodContent.classList.add('foodContent');

    const breakfastFood = document.createElement('div');
    breakfastFood.classList.add('breakfastFood');
    breakfastFood.textContent = 'Breakfast';

    const allStar = document.createElement('div');
    allStar.setAttribute('id', 'allStar');
    const allStarPic = document.createElement('img');
    allStarPic.src = 'allstar.jpg';
    const allStarDescription = document.createElement('div');
    allStarDescription.classList.add('allStarDescription');
    allStarDescription.textContent = "Straight from the mind's of WaHo: Waffle (chocolate chip or regular), 2 Eggs (how you like 'em), your choice of: bacon, ham or sausage and your choice of: grits, or hashbrowns. $8.50"
    allStar.appendChild(allStarPic);
    allStar.appendChild(allStarDescription);
    breakfastFood.appendChild(allStar);

    foodContent.appendChild(breakfastFood);

    menuContent.appendChild(foodContent);
}