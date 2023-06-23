const menuBtn = document.querySelector('.ham');
const mobileMenu = document.querySelector('.mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');
const modal = document.querySelector('#myModal');
const closeButton = modal.querySelector('.close-button');
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

const project = {
  name: 'Multi Post Stories',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.

  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
  `,
  image: './images/modal-desk.png',
  technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
  liveLink: 'https://example.com/project1',
  sourceLink: 'https://github.com/user/project1',
};

const projectsSection = document.querySelector('.projects-section');

function createProjectElements(project) {
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project');

  const projectName = document.createElement('h3');
  projectName.textContent = project.name;
  projectName.classList.add('project-name');
  projectContainer.appendChild(projectName);

  const projectTechnologies = document.createElement('ul');
  projectTechnologies.classList.add('project-technologies');
  project.technologies.forEach((technology) => {
    const technologyItem = document.createElement('li');
    technologyItem.textContent = technology;
    technologyItem.classList.add('technology-item');
    projectTechnologies.appendChild(technologyItem);
  });
  projectContainer.appendChild(projectTechnologies);

  const projectDetails = document.createElement('div');
  projectDetails.classList.add('project-details');

  const projectImage = document.createElement('img');
  projectImage.setAttribute('src', project.image);
  projectImage.classList.add('project-image');
  projectDetails.appendChild(projectImage);

  const projectDescription = document.createElement('p');
  projectDescription.textContent = project.description;
  projectDescription.classList.add('project-description');
  projectDetails.appendChild(projectDescription);

  projectContainer.appendChild(projectDetails);

  const projectLinks = document.createElement('div');
  projectLinks.classList.add('project-links');

  const liveLink = document.createElement('a');
  liveLink.setAttribute('href', project.liveLink);
  liveLink.classList.add('live-link');
  const liveLinkImage = document.createElement('img');
  liveLinkImage.setAttribute('src', './images/seelive.png');
  liveLinkImage.setAttribute('alt', 'Live Version');
  liveLink.appendChild(liveLinkImage);
  projectLinks.appendChild(liveLink);

  const sourceLink = document.createElement('a');
  sourceLink.setAttribute('href', project.sourceLink);
  sourceLink.classList.add('source-link');
  const sourceLinkImage = document.createElement('img');
  sourceLinkImage.setAttribute('src', './images/source.png');
  sourceLinkImage.setAttribute('alt', 'Source Code');
  sourceLink.appendChild(sourceLinkImage);
  projectLinks.appendChild(sourceLink);

  projectContainer.appendChild(projectLinks);

  const seeProjectButtons = projectContainer.querySelectorAll('.work2-btn, .button-work1');
  seeProjectButtons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.classList.add('show-modal');
    });
  });

  projectsSection.appendChild(projectContainer);
}

createProjectElements(project);

closeButton.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

const openModalButtons = document.querySelectorAll('.work2-btn, .button-work1');

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.add('show-modal');
  });
});
