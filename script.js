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


document.addEventListener('DOMContentLoaded',() => {
  const section = document.createElement('section');
  section.className = 'works';
  section.id = 'portfolio-red';
  const titleWorksDiv = document.createElement('div');
  titleWorksDiv.className = 'title-works';
  const title = document.createElement('h4');
  title.textContent = 'My Recent Works';
  const lineDesktopDiv = document.createElement('div');
  lineDesktopDiv.className = 'line-desktop';
  const hr = document.createElement('hr');
  titleWorksDiv.appendChild(title);
  lineDesktopDiv.appendChild(hr);
  titleWorksDiv.appendChild(lineDesktopDiv);
  section.appendChild(titleWorksDiv);
  const work1ImgDiv = document.createElement('div');
  work1ImgDiv.className = 'work1img';
  const work1Img = document.createElement('img');
  work1Img.src = 'images/workImg1.svg';
  work1ImgDiv.appendChild(work1Img);
  section.appendChild(work1ImgDiv);
  const project1Div = document.createElement('div');
  project1Div.className = 'project1';

  const imgProject1Div = document.createElement('div');
  imgProject1Div.className = 'ImgProject1';
  const imgProject1 = document.createElement('img');
  imgProject1.src = 'images/ImgProject1-desktop.svg';
  imgProject1Div.appendChild(imgProject1);
  const workTitleContentTagDiv = document.createElement('div');
  workTitleContentTagDiv.className = 'work-titl-content-tag';
  const work1TitleDiv = document.createElement('div');
  work1TitleDiv.className = 'work1-title';
  const work1Title = document.createElement('h4');
  work1Title.textContent = 'Multi-Post Stories';
  work1TitleDiv.appendChild(work1Title);
  const work1ContentDiv = document.createElement('div');
  work1ContentDiv.className = 'work1content';
  const work1Content = document.createElement('p');
  work1Content.innerHTML = "A daily selection of privately personalized<br />reads; no accounts or sign-ups required.<br />Has been the industry's standard dummy<br />text ever since the 1500s, when an<br />unknown printer took a standard dummy<br />text.";
  work1ContentDiv.appendChild(work1Content);
  const work1TagDiv = document.createElement('div');
  work1TagDiv.className = 'work1-tag';
  const work1TagCssDiv = document.createElement('div');
  work1TagCssDiv.className = 'work1tag-css';
  const work1TagCssImg = document.createElement('img');
  work1TagCssImg.src = 'images/Tag.png';
  work1TagCssDiv.appendChild(work1TagCssImg);
  const work1TagHtmlDiv = document.createElement('div');
  work1TagHtmlDiv.className = 'work1tag-html';
  const work1TagHtmlImg = document.createElement('img');
  work1TagHtmlImg.src = 'images/Tag (1).png';
  work1TagHtmlDiv.appendChild(work1TagHtmlImg);
  const work1TagBootstrapDiv = document.createElement('div');
  work1TagBootstrapDiv.className = 'work1tag-bootstrap';
  const work1TagBootstrapImg = document.createElement('img');
  work1TagBootstrapImg.src = 'images/Tag (2).png';
  work1TagBootstrapDiv.appendChild(work1TagBootstrapImg);
  const work1TagRubyDiv = document.createElement('div');
  work1TagRubyDiv.className = 'work1tag-ruby';
  const work1TagRubyImg = document.createElement('img');
  work1TagRubyImg.src = 'images/Tag (3).png';
  work1TagRubyDiv.appendChild(work1TagRubyImg);
  work1TagDiv.appendChild(work1TagCssDiv);
  work1TagDiv.appendChild(work1TagHtmlDiv);
  work1TagDiv.appendChild(work1TagBootstrapDiv);
  work1TagDiv.appendChild(work1TagRubyDiv);
  workTitleContentTagDiv.appendChild(work1TitleDiv);
  workTitleContentTagDiv.appendChild(work1ContentDiv);
  workTitleContentTagDiv.appendChild(work1TagDiv);

  project1Div.appendChild(imgProject1Div);
  project1Div.appendChild(workTitleContentTagDiv);
  section.appendChild(project1Div);
  const buttonWork1DesktopDiv = document.createElement('div');
  buttonWork1DesktopDiv.className = 'button-work1-desktop';

  const buttonWork1 = document.createElement('button');
  buttonWork1.className = 'button-work1';
  buttonWork1.textContent = 'See project';

  buttonWork1DesktopDiv.appendChild(buttonWork1);

  section.appendChild(buttonWork1DesktopDiv);

  const projectsDiv = document.createElement('div');
  projectsDiv.className = 'projects';

  const work2Img1Div = document.createElement('div');
  work2Img1Div.className = 'work2img-1';

  const work2Content1Div = document.createElement('div');
  work2Content1Div.className = 'work2-content-1';

  const work2ContentDiv = document.createElement('div');
  work2ContentDiv.className = 'work2-content';

  const work2ContentTitle = document.createElement('h2');
  work2ContentTitle.textContent = 'Profesional Art Printing Data';

  const work2ContentPara = document.createElement('p');
  work2ContentPara.textContent = "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.";

  work2ContentDiv.appendChild(work2ContentTitle);
  work2ContentDiv.appendChild(work2ContentPara);

  work2Content1Div.appendChild(work2ContentDiv);

  work2Img1Div.appendChild(work2Content1Div);

  const work2Tag1Div = document.createElement('div');
  work2Tag1Div.className = 'work2tag-1';

  const work2TagDiv = document.createElement('div');
  work2TagDiv.className = 'work2tag';

  const work2TagHtmlDiv = document.createElement('div');
  work2TagHtmlDiv.className = 'work2tag-html';

  const work2TagHtmlImg = document.createElement('img');
  work2TagHtmlImg.src = './images/Tag (4).png';

  work2TagHtmlDiv.appendChild(work2TagHtmlImg);

  const work2TagCssDiv = document.createElement('div');
  work2TagCssDiv.className = 'work2tag-css';

  const work2TagCssImg = document.createElement('img');
  work2TagCssImg.src = './images/Tag (5).png';

  work2TagCssDiv.appendChild(work2TagCssImg);

  const work2TagBootstrapDiv = document.createElement('div');
  work2TagBootstrapDiv.className = 'work2tag-bootstrap';

  const work2TagBootstrapImg = document.createElement('img');
  work2TagBootstrapImg.src = './images/Tag (6).png';

  work2TagBootstrapDiv.appendChild(work2TagBootstrapImg);

  work2TagDiv.appendChild(work2TagHtmlDiv);
  work2TagDiv.appendChild(work2TagCssDiv);
  work2TagDiv.appendChild(work2TagBootstrapDiv);

  work2Tag1Div.appendChild(work2TagDiv);

  projectsDiv.appendChild(work2Img1Div);
  projectsDiv.appendChild(work2Tag1Div);

  section.appendChild(projectsDiv);

  document.body.appendChild(section);
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
  name: 'Professional Printing',
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
  name: 'Data Dashboard',
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
  name: 'Website Portfolio',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
  `,
  image: './images/img-desk-4.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  liveLink: 'https://example.com/project1',
  sourceLink: 'https://github.com/user/project1',
},
{
  id: 6,
  name: 'Professional Printing',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
  `,
  image: './images/work2Img.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  liveLink: 'https://example.com/project1',
  sourceLink: 'https://github.com/user/project1',
},

{
  id: 7,
  name: 'Data Dashboard',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
  
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
    `,
  image: './images/desk-2-img.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  liveLink: 'https://example.com/project1',
  sourceLink: 'https://github.com/user/project1',

},

];

const button = document.querySelector('.button-work1');

function openModalWithProject1() {
  const modal = document.getElementById('myModal');
  const project1 = project.find((project) => project.id === 1);

  modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>${project1.name}</h2>
    <ul>
      ${project1.technologies.map((tech) => `<li>${tech}</li>`).join('')}
    </ul>
    <div class="image-text-container">
      <img src="${project1.image}" alt="${project1.name}">
      <p>${project1.description}</p>
    </div>
    <div class = link-container>
    <div class="links-b">
      <a href="${project1.liveLink}" target="_blank"><img src="./images/seelive.png" ></a>
      <a href="${project1.sourceLink}" target="_blank"><img src="./images/source.png" ></a>
      </div>
    </div>
  </div>
`;

  modal.style.display = 'block';
  const closeButton = modal.querySelector('.close');
  function closeModal1() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  closeButton.addEventListener('click', closeModal1);
}

button.addEventListener('click', openModalWithProject1);

const button2 = document.querySelector('.work2-btn');

function openModalWithProject2() {
  const modal = document.getElementById('myModal');
  const project2 = project.find((project) => project.id === 2);
  modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>${project2.name}</h2>
    <ul>
      ${project2.technologies.map((tech) => `<li>${tech}</li>`).join('')}
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

  function closeModal2() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }

  closeButton.addEventListener('click', closeModal2);
}

button2.addEventListener('click', openModalWithProject2);

const button3 = document.querySelector('.work2img-2');

function openModalWithProject3() {
  const modal = document.getElementById('myModal');

  const project3 = project.find((project) => project.id === 4);

  modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>${project3.name}</h2>
    <ul>
      ${project3.technologies.map((tech) => `<li>${tech}</li>`).join('')}
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

  function closeModal3() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  closeButton.addEventListener('click', closeModal3);
}

button3.addEventListener('click', openModalWithProject3);

const button4 = document.querySelector('.work2img-3');

function openModalWithProject4() {
  const modal = document.getElementById('myModal');

  const project4 = project.find((project) => project.id === 5);

  modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>${project4.name}</h2>
    <ul>
      ${project4.technologies.map((tech) => `<li>${tech}</li>`).join('')}
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

  function closeModal4() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  closeButton.addEventListener('click', closeModal4);
}

button4.addEventListener('click', openModalWithProject4);

const button5 = document.querySelector('.work2img-4');

function openModalWithProject5() {
  const modal = document.getElementById('myModal');

  const project5 = project.find((project) => project.id === 6);

  modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>${project5.name}</h2>
    <ul>
      ${project5.technologies.map((tech) => `<li>${tech}</li>`).join('')}
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

  function closeModal5() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }

  closeButton.addEventListener('click', closeModal5);
}

button5.addEventListener('click', openModalWithProject5);

const button6 = document.querySelector('.work2img-5');

function openModalWithProject6() {
  const modal = document.getElementById('myModal');

  const project6 = project.find((project) => project.id === 7);

  modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>${project6.name}</h2>
    <ul>
      ${project6.technologies.map((tech) => `<li>${tech}</li>`).join('')}
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

  function closeModal6() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  closeButton.addEventListener('click', closeModal6);
}
button6.addEventListener('click', openModalWithProject6);
const button7 = document.querySelector('.work2img-6');

function openModalWithProject7() {
  const modal = document.getElementById('myModal');
  const project7 = project.find((project) => project.id === 5);
  modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>${project7.name}</h2>
    <ul>
      ${project7.technologies.map((tech) => `<li>${tech}</li>`).join('')}
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

  function closeModal7() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }

  closeButton.addEventListener('click', closeModal7);
}

button7.addEventListener('click', openModalWithProject7);
