const logo = document.querySelector('.logo');
const menu_Btn = document.querySelector('.ham');
const mobile_Menu = document.querySelector('.mobile-menu');
const menu_Links = mobile_Menu.querySelectorAll('a');

menu_Btn.addEventListener('click', () => {
  menu_Btn.classList.toggle('is-active');
  mobile_Menu.classList.toggle('is-active');

  if (logo.classList.contains('hide-logo')) {
    logo.classList.remove('hide-logo');
  } else {
    logo.classList.add('hide-logo');
  }
});


menu_Links.forEach((link) => {
  link.addEventListener('click', () => {
    menu_Btn.classList.remove('is-active');
    mobile_Menu.classList.remove('is-active');
    logo.classList.remove('hide-logo');
  });
});
