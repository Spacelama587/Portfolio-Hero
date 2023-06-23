const logo = document.querySelector('.logo');
const menuBtn = document.querySelector('.ham');
const mobileMenu = document.querySelector('.mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');

  if (logo.classList.contains('hide-logo')) {
    logo.classList.remove('hide-logo');
  } else {
    logo.classList.add('hide-logo');
  }
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('is-active');
    mobileMenu.classList.remove('is-active');
    logo.classList.remove('hide-logo');
  });
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); 

  var emailInput = document.getElementById("email");
  var email = emailInput.value;

  if (email === email.toLowerCase()) {
   
    document.getElementById("error").style.display = "none";
    document.getElementById("contact-form").submit();
  } else {
   
    document.getElementById("error").textContent = "Email must be in lowercase.";
    document.getElementById("error").style.display = "block";
  }
});