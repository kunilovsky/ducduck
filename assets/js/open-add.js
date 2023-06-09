//Open nav modal
const navBtnModal = document.getElementById('nav-modal');
const navModal = document.getElementById('modal-top-nav');
const headerColor = document.getElementById('header');
const navItem = document.querySelectorAll('.nav-link');
const logo = document.getElementById('logo');
const logoDuck = document.getElementById('logo-duck');

navBtnModal.addEventListener('click', () => {
  navBtnModal.classList.toggle('nav-modal-open');
  navModal.classList.toggle('modal-top-nav-active');
  headerColor.classList.toggle('header-yellow');
  navItem.forEach((el) => {
    el.classList.toggle('nav-link-black');
  });
  logo.classList.toggle('navbar-brand-black');
  logoDuck.classList.toggle('logo-dark');
});
