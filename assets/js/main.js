'use strict'

//Copy e-mail
let text = document.getElementById('mail-data').innerHTML;
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {}
};

//Open nav modal
const navBtnModal = document.getElementById('nav-modal');
const navModal = document.getElementById('modal-top-nav');
const headerColor = document.getElementById('header');
const navbarLeft = document.getElementById('navbar-nav__left');
const navItem = document.querySelectorAll('.nav-link');
const logo = document.getElementById('logo');
const logoDuck = document.getElementById('logo-duck');

navBtnModal.addEventListener('click', () => {
  navBtnModal.classList.toggle('nav-modal-open');
  navModal.classList.toggle('modal-top-nav-active');
  headerColor.classList.toggle('header-yellow');
  navbarLeft.classList.toggle('navbar-nav__left-hide');
  navItem.forEach((el) => {
    el.classList.toggle('nav-link-black');
  });
  logo.classList.toggle('navbar-brand-black');
  logoDuck.classList.toggle('logo-dark');
});

//Slide lib
const slideBtnNext = document.getElementById('btn-s-next');
const slideBtnBack = document.getElementById('btn-s-back');
const slideItem = document.querySelectorAll('.slide-item');
const slidePosiiton = document.getElementById('slide-position-item');
let units = slidePosiiton.value.replace(/\d/g, '');
let currentIndex = 0;

slideBtnNext.addEventListener('click', () => {
  if (currentIndex < slideItem.length - 1) {
    slideItem[currentIndex].classList.remove('slide-item-active');
    currentIndex++;
    slideItem[currentIndex].classList.add('slide-item-active');
    slidePosiiton.value = parseInt(slidePosiiton.value) + 1 + units;
  }
});

slideBtnBack.addEventListener('click', () => {
  if (currentIndex > 0) {
    slideItem[currentIndex].classList.remove('slide-item-active');
    currentIndex--;
    slideItem[currentIndex].classList.add('slide-item-active');
    slidePosiiton.value = parseInt(slidePosiiton.value) - 1 - units;
  }
});

//Slide hirring
const slideBtnNextHirring = document.getElementById('btn-s-next-hirring');
const slideBtnBackHirring = document.getElementById('btn-s-back-hirring');
const slideItemHirring = document.querySelectorAll('.slide-item-hirring');
const slidePosiitonHirring = document.getElementById(
  'slide-position-item-hirring'
);
let unitsHirring = slidePosiitonHirring.value.replace(/\d/g, '');
let currentIndexHirring = 0;

slideBtnNextHirring.addEventListener('click', () => {
  if (currentIndexHirring < slideItemHirring.length - 1) {
    slideItemHirring[currentIndexHirring].classList.remove(
      'slide-item-hirring-active'
    );
    currentIndexHirring++;
    slideItemHirring[currentIndexHirring].classList.add(
      'slide-item-hirring-active'
    );
    slidePosiitonHirring.value =
      parseInt(slidePosiitonHirring.value) + 1 + unitsHirring;
  }
});

slideBtnBackHirring.addEventListener('click', () => {
  if (currentIndexHirring > 0) {
    slideItemHirring[currentIndexHirring].classList.remove(
      'slide-item-hirring-active'
    );
    currentIndexHirring--;
    slideItemHirring[currentIndexHirring].classList.add(
      'slide-item-hirring-active'
    );
    slidePosiitonHirring.value =
      parseInt(slidePosiitonHirring.value) - 1 - unitsHirring;
  }
});

//Slide Cases
const slideBtnNextCases = document.getElementById('btn-s-next-cases');
const slideBtnBackCases = document.getElementById('btn-s-back-cases');
const slideItemCases = document.querySelectorAll('.slide-ceses');
const slidePosiitonCases = document.getElementById('slide-position-item-cases');
let unitsCases = slidePosiiton.value.replace(/\d/g, '');
let currentIndexCases = 0;

slideBtnNextCases.addEventListener('click', () => {
  if (currentIndexCases < slideItem.length - 1) {
    slideItemCases[currentIndexCases].classList.remove('slide-ceses-active');
    currentIndexCases++;
    slideItemCases[currentIndexCases].classList.add('slide-ceses-active');
    slidePosiitonCases.value =
      parseInt(slidePosiitonCases.value) + 1 + unitsCases;
  }
});

slideBtnBackCases.addEventListener('click', () => {
  if (currentIndexCases > 0) {
    slideItemCases[currentIndexCases].classList.remove('slide-item-active');
    currentIndexCases--;
    slideItemCases[currentIndexCases].classList.add('slide-item-active');
    slidePosiitonCases.value =
      parseInt(slidePosiitonCases.value) - 1 - unitsCases;
  }
});
