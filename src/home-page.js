const homePageContent = document.createElement('div');

export default function homePage() {
    createHomePage();
    homePageContent.classList.remove('hidden');
}

function createHomePage() {
    const content = document.getElementById('content');
    homePageContent.classList.add('homePageContent');

    const heading = document.createElement('h1');
    heading.textContent = 'The Atlannuh'

    const restaurantPic = document.createElement('img');
    restaurantPic.src = 'restaurant-pic.jpg';

    const description = document.createElement('div');
    description.classList.add('description');
    description.textContent = "This restaurant's menu is inspired by all things Atlanta. From the food and drinks, even down to the name (this is how local's pronounce the city's name). Come to enjoy not only a great meal but also a true Atlanta experience!"

    homePageContent.appendChild(heading);
    homePageContent.appendChild(restaurantPic);
    homePageContent.appendChild(description);

    content.appendChild(homePageContent);
}