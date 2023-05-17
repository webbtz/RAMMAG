const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('active');
    menu.classList.add('active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    menuOpen = false;
  }
});
