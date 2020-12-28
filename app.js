const burger = document.querySelector(".hamburger");
const nav = document.querySelector('.links')
const line = document.querySelector('.line2')

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
});