const contactContent = document.createElement('div');

export default function contactPage() {
    const content = document.getElementById('content');
    contactContent.classList.add('contactContent');

    const hours = document.createElement('div');
    hours.classList.add('hours');
    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = 'Atlannuh Hours'
    hours.appendChild(hoursTitle);
    contactContent.appendChild(hours);
    content.appendChild(contactContent);
}