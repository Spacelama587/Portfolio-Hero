const menuBtn = document.querySelector('.ham');
const mobileMenu = document.querySelector('.mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');
const logo = document.querySelector('.logo');

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

const project = [{
  id: 1,
  name: 'Multi Post Stories',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
  `,
  image: './images/modal-desk.png',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  liveLink: 'https://example.com/project1',
  sourceLink: 'https://github.com/user/project1',
},
{
  id: 2,
  name: 'Test',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
  `,
  image: './images/id1.png',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  liveLink: 'https://example.com/project1',
  sourceLink: 'https://github.com/user/project1',
},
{
  id: 3,
  name: 'Test2',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
  `,
  image: './images/modal-desk.png',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  liveLink: 'https://example.com/project1',
  sourceLink: 'https://github.com/user/project1',
},
{
  id: 4,
  name: 'Multi Post Stories',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
  `,
  image: './images/desk-2-img.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  liveLink: 'https://example.com/project1',
  sourceLink: 'https://github.com/user/project1',
},
{
  id: 5,
  name: 'Multi Post Stories',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
  `,
  image: './images/modal-desk.png',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  liveLink: 'https://example.com/project1',
  sourceLink: 'https://github.com/user/project1',
},
{
  id: 6,
  name: 'Multi Post Stories',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
  `,
  image: './images/img-desk-4.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  liveLink: 'https://example.com/project1',
  sourceLink: 'https://github.com/user/project1',
},
{
  
  id: 7,
  name: 'Multi Post Stories',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
  
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
    `,
  image: './images/id1.png',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  liveLink: 'https://example.com/project1',
  sourceLink: 'https://github.com/user/project1',

}
];

const button = document.querySelector('.button-work1');
button.addEventListener('click', openModalWithProject1);

function openModalWithProject1() {

  const modal = document.getElementById('myModal');

  const project1 = project.find(project => project.id === 1);

  modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>${project1.name}</h2>
    <ul>
      ${project1.technologies.map(tech => `<li>${tech}</li>`).join('')}
    </ul>
    <div class="image-text-container">
      <img src="${project1.image}" alt="${project1.name}">
      <p>${project1.description}</p>
    </div>
    <div class="links">
      <a href="${project1.liveLink}" target="_blank"><img src="./images/seelive.png" ></a>
      <a href="${project1.sourceLink}" target="_blank"><img src="./images/source.png" ></a>
    </div>
  </div>
`;

  modal.style.display = 'block';

  const closeButton = modal.querySelector('.close');
  // eslint-disable-next-line no-redeclare
  closeButton.addEventListener('click', closeModal);
}
// eslint-disable-next-line no-redeclare
function closeModal() {

  const modal = document.getElementById('myModal');

  modal.style.display = 'none';
}

const button2 = document.querySelector('.work2-btn');
button2.addEventListener('click', openModalWithProject2);

function openModalWithProject2() {

  const modal = document.getElementById('myModal');

  const project2 = project.find(project => project.id === 2);

  modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>${project2.name}</h2>
    <ul>
      ${project2.technologies.map(tech => `<li>${tech}</li>`).join('')}
    </ul>
    <div class="image-text-container">
      <img src="${project2.image}" alt="${project2.name}">
      <p>${project2.description}</p>
    </div>
    <div class="links">
      <a href="${project2.liveLink}" target="_blank"><img src="./images/seelive.png" ></a>
      <a href="${project2.sourceLink}" target="_blank"><img src="./images/source.png" ></a>
    </div>
  </div>
`;

  modal.style.display = 'block';

  const closeButton = modal.querySelector('.close');
  // eslint-disable-next-line no-redeclare
  closeButton.addEventListener('click', closeModal);
}
// eslint-disable-next-line no-redeclare
function closeModal() {

  const modal = document.getElementById('myModal');

  modal.style.display = 'none';
}

const button3 = document.querySelector('.work2img-2');
button3.addEventListener('click', openModalWithProject3);

function openModalWithProject3() {

  const modal = document.getElementById('myModal');

  const project3 = project.find(project => project.id === 4);

  modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>${project3.name}</h2>
    <ul>
      ${project3.technologies.map(tech => `<li>${tech}</li>`).join('')}
    </ul>
    <div class="image-text-container">
      <img src="${project3.image}" alt="${project3.name}">
      <p>${project3.description}</p>
    </div>
    <div class="links">
      <a href="${project3.liveLink}" target="_blank"><img src="./images/seelive.png" ></a>
      <a href="${project3.sourceLink}" target="_blank"><img src="./images/source.png" ></a>
    </div>
  </div>
`;

  modal.style.display = 'block';

  const closeButton = modal.querySelector('.close');
  // eslint-disable-next-line no-redeclare
  closeButton.addEventListener('click', closeModal);
}
// eslint-disable-next-line no-redeclare
function closeModal() {

  const modal = document.getElementById('myModal');

  modal.style.display = 'none';
}

const button4 = document.querySelector('.work2img-3');
button4.addEventListener('click', openModalWithProject4);

function openModalWithProject4() {

  const modal = document.getElementById('myModal');

  const project4 = project.find(project => project.id === 5);

  modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>${project4.name}</h2>
    <ul>
      ${project4.technologies.map(tech => `<li>${tech}</li>`).join('')}
    </ul>
    <div class="image-text-container">
      <img src="${project4.image}" alt="${project4.name}">
      <p>${project4.description}</p>
    </div>
    <div class="links">
      <a href="${project4.liveLink}" target="_blank"><img src="./images/seelive.png" ></a>
      <a href="${project4.sourceLink}" target="_blank"><img src="./images/source.png" ></a>
    </div>
  </div>
`;

  modal.style.display = 'block';

  const closeButton = modal.querySelector('.close');
  // eslint-disable-next-line no-redeclare
  closeButton.addEventListener('click', closeModal);
}
// eslint-disable-next-line no-redeclare
function closeModal() {

  const modal = document.getElementById('myModal');

  modal.style.display = 'none';
}

const button5 = document.querySelector('.work2img-4');
button5.addEventListener('click', openModalWithProject5);

function openModalWithProject5() {

  const modal = document.getElementById('myModal');

  const project5 = project.find(project => project.id === 6);

  modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>${project5.name}</h2>
    <ul>
      ${project5.technologies.map(tech => `<li>${tech}</li>`).join('')}
    </ul>
    <div class="image-text-container">
      <img src="${project5.image}" alt="${project5.name}">
      <p>${project5.description}</p>
    </div>
    <div class="links">
      <a href="${project5.liveLink}" target="_blank"><img src="./images/seelive.png" ></a>
      <a href="${project5.sourceLink}" target="_blank"><img src="./images/source.png" ></a>
    </div>
  </div>
`;

  modal.style.display = 'block';

  const closeButton = modal.querySelector('.close');
  // eslint-disable-next-line no-redeclare
  closeButton.addEventListener('click', closeModal);
}
// eslint-disable-next-line no-redeclare
function closeModal() {

  const modal = document.getElementById('myModal');

  modal.style.display = 'none';
}

const button6 = document.querySelector('.work2img-5');
button6.addEventListener('click', openModalWithProject6);

function openModalWithProject6() {

  const modal = document.getElementById('myModal');

  const project6 = project.find(project => project.id === 7);

  modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>${project6.name}</h2>
    <ul>
      ${project6.technologies.map(tech => `<li>${tech}</li>`).join('')}
    </ul>
    <div class="image-text-container">
      <img src="${project6.image}" alt="${project6.name}">
      <p>${project6.description}</p>
    </div>
    <div class="links">
      <a href="${project6.liveLink}" target="_blank"><img src="./images/seelive.png" ></a>
      <a href="${project6.sourceLink}" target="_blank"><img src="./images/source.png" ></a>
    </div>
  </div>
`;

  modal.style.display = 'block';

  const closeButton = modal.querySelector('.close');
  // eslint-disable-next-line no-redeclare
  closeButton.addEventListener('click', closeModal);
}
// eslint-disable-next-line no-redeclare

function closeModal() {
  const modal = document.getElementById('myModal');

  modal.style.display = 'none';
}

const button7 = document.querySelector('.work2img-6');
button7.addEventListener('click', openModalWithProject7);

function openModalWithProject7() {

  const modal = document.getElementById('myModal');

  const project7 = project.find(project => project.id === 7);

  modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>${project7.name}</h2>
    <ul>
      ${project7.technologies.map(tech => `<li>${tech}</li>`).join('')}
    </ul>
    <div class="image-text-container">
      <img src="${project7.image}" alt="${project7.name}">
      <p>${project7.description}</p>
    </div>
    <div class="links">
      <a href="${project7.liveLink}" target="_blank"><img src="./images/seelive.png" ></a>
      <a href="${project7.sourceLink}" target="_blank"><img src="./images/source.png" ></a>
    </div>
  </div>
`;

  modal.style.display = 'block';

  const closeButton = modal.querySelector('.close');
  // eslint-disable-next-line no-redeclare
  closeButton.addEventListener('click', closeModal);
}
// eslint-disable-next-line no-redeclare
function closeModal() {

  const modal = document.getElementById('myModal');

  modal.style.display = 'none';
}