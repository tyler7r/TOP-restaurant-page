export default function contactPage() {
    const content = document.getElementById('content');

    const hours = document.createElement('div');
    hours.classList.add('hours');
    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = 'Atlannuh Hours'
    hours.appendChild(hoursTitle);
    content.appendChild(hours);
}