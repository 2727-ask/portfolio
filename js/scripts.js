document.addEventListener('DOMContentLoaded', () => {
    // Toggle the navbar burger on mobile
    const burgerIcon = document.querySelector('.navbar-burger');
    const navbarMenu = document.querySelector('#navbarBasic');
  
    burgerIcon.addEventListener('click', () => {
      burgerIcon.classList.toggle('is-active');
      navbarMenu.classList.toggle('is-active');
    });
  });
  