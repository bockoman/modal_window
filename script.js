'use strict';

let modal = document.querySelector('.modal');
let showModal = document.querySelectorAll('.show-modal');
let closeModal = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openOrClose);
}

overlay.addEventListener('click', openOrClose);

closeModal.addEventListener('click', openOrClose);

function openOrClose() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}

document.addEventListener('keydown', function (e) {
  let keyCode = e.keyCode;
  if (keyCode === 27) openOrClose();
});
