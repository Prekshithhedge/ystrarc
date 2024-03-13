document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeLink = document.querySelector('#close-link');
  
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
  
    closeLink.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  });