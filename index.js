const overlay = document.querySelector('.overlay');
const text = document.querySelector('.text');
const button = document.querySelector('.button');

button.addEventListener('click', onModalOpen);
overlay.addEventListener('click', onBackDropClick);

function onModalOpen() {
    overlay.classList.remove('is-hidden');
}

function onBackDropClick() {
    overlay.classList.add('is-hidden');
}



