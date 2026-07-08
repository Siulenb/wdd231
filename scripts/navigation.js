// Hamburguer menu toggle
// const hamButton = document.getElementById('ham-button');
// const navMenu = document.getElementById('nav-menu');    

// hamButton.addEventListener('click', () => {
//     navMenu.classList.toggle('show');
// }); 

const hamButton = document.querySelector('#ham-button');
// navigation bar toggle
const navMenu = document.querySelector('#nav-menu');

// Toggle the navigation menu when the hamburger button is clicked
hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navMenu.classList.toggle('show');
});
