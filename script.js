const logo = document.querySelector('.logo');
const menu_btn = document.querySelector('.ham');
const mobile_menu = document.querySelector('.mobile-menu');
const menu_links = mobile_menu.querySelectorAll('a');

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');

  if (logo.classList.contains('hide-logo')) {
    logo.classList.remove('hide-logo');
  } else {
    logo.classList.add('hide-logo');
  }
});

menu_links.forEach((link) => {
  link.addEventListener('click', function () {
    menu_btn.classList.remove('is-active');
    mobile_menu.classList.remove('is-active');
    logo.classList.remove('hide-logo');
  });
});
