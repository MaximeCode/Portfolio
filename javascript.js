// Créer une fonction qui permet d'ajouter automatiquement mon âge dans #age
function age() {
  const ageElements = document.querySelectorAll('.age');
  const birthDate = new Date(2005, 11, 20); // Month is 0-indexed, so 11 is December
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDifference = currentDate.getMonth() - birthDate.getMonth();
  const dayDifference = currentDate.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  ageElements.forEach(element => {
    element.textContent = age + " ans";
  });
}

function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.burger');

  burger.addEventListener('click', (e) => {
    navbar.classList.toggle('show-nav');
  });

  const navbarLinks = document.querySelectorAll('.navbar a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navbar.classList.toggle('show-nav');
    });
  })

}

document.addEventListener('DOMContentLoaded', () => {
  age();
  toggleMenu();
});