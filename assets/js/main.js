'use strict';

//Copy e-mail
let text = document.getElementById('mail-data').innerHTML;
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {}
};

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

const btnReader = document.getElementById('read-1');
const textReader = document.getElementById('read-text-1');

btnReader.addEventListener('click', () => {
  textReader.classList.toggle('text-open');
});
const btnReader2 = document.getElementById('read-2');
const textReader2 = document.getElementById('read-text-2');

btnReader2.addEventListener('click', () => {
  textReader2.classList.toggle('text-open');
});
const btnReader3 = document.getElementById('read-3');
const textReader3 = document.getElementById('read-text-3');

btnReader3.addEventListener('click', () => {
  textReader3.classList.toggle('text-open');
});

const textBtnRead1 = document.getElementById('textBtn-1');

textBtnRead1.addEventListener('click', () => {
  textBtnRead1.innerHTML =
    textBtnRead1.innerHTML === 'Read more'
      ? (textBtnRead1.innerHTML = 'Close')
      : (textBtnRead1.innerHTML = 'Read more');
});
const textBtnRead2 = document.getElementById('textBtn-2');

textBtnRead2.addEventListener('click', () => {
  textBtnRead2.innerHTML =
    textBtnRead2.innerHTML === 'Read more'
      ? (textBtnRead2.innerHTML = 'Close')
      : (textBtnRead2.innerHTML = 'Read more');
});
const textBtnRead3 = document.getElementById('textBtn-3');

textBtnRead3.addEventListener('click', () => {
  textBtnRead3.innerHTML =
    textBtnRead3.innerHTML === 'Read more'
      ? (textBtnRead3.innerHTML = 'Close')
      : (textBtnRead3.innerHTML = 'Read more');
});
