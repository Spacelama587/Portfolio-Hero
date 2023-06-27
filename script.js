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

window.onload = function () {
  const dynProj = document.querySelector('.dyn-proj');
  const section = document.createElement('section');
  section.setAttribute('class', 'works');
  section.setAttribute('id', 'portfolio-red');
  section.innerHTML = `
    <div class="title-works">
      <h4>My Recent Works</h4>
      <div class="line-desktop">
        <hr>
      </div>
    </div>
    <div class="work1img">
      <img src="images/workImg1.svg">
  
    </div>
    
    <div class="project1">
      <div class="ImgProject1">
      <img src="images/ImgProject1-desktop.svg">
      </div>
      <div class="work-titl-content-tag">
        <div class="work1-title">
          <h4> Multi-Post Stories </h4>
         </div>
        <div class="work1content">
         <p>A daily selection of privately personalized <br />  reads; no accounts or sign-ups required. <br />  has been the industry's standard dummy <br />  text ever since the 1500s, when an <br />  unknown printer took a standard dummy <br />  text.</p>
        </div>
        <div class="work1-tag">
         <div class="work1tag-css">
           <img src="images/Tag.png">
         </div>
         <div class="work1tag-html">
           <img src="images/Tag (1).png">
         </div>
         <div class="work1tag-bootstrap">
           <img src="images/Tag (2).png">
         </div>
         <div class="work1tag-ruby">
           <img src="images/Tag (3).png">
         </div>
        </div>
      </div>
      
  </div>
  
  <div class="button-work1-desktop">
    <button class="button-work1">See project</button>
   </div>

   <div class="projects">
    <div class="work2img-1">
      <div class="work2-content-1">
      <div class="work2-content">
        <h2>Profesional Art <br /> Printing Data</h2>
        <p>A daily selection of privately <br />personalized reads; no accounts or <br />sign-ups required. Has been the <br />industry's standard.</p>
      </div>
    </div>
    <div class="work2tag-1">
     <div class="work2tag">
        <div class="work2tag-html">
          <img src="./images/Tag (4).png">
        </div>

        <div class="work2tag-css">
          <img src="./images/Tag (5).png">
        </div>

        <div class="work2tag-bootstrap">
          <img src="./images/Tag (6).png">
        </div>
       
        
     </div>
    </div>

     <div class="work2btn-div">
      <button class="work2-btn">See project</button>
    </div>
    </div>
    

    <div class="work2img-2">
      
        
        <div class="work2-content-2">
          <h2 id="mobile-title">Profesional Art <br /> Printing Data</h2>
          <p id="mobile-para">A daily selection of privately <br />personalized reads; no accounts or <br />sign-ups required. Has been the <br />industry's standard.</p>
          <h2 id="desktop-title">
            Data Dashboard <br /> Healthcare</h2>
            <p id="desktop-para">A daily selection of privately personalized <br />reads; no accounts or sign-ups required. <br />Has been the industry's standard.</p>
        </div>
       
     <div class="work2tag">
        <div class="work2tag-html">
          <img src="./images/Tag (4).png">
        </div>

        <div class="work2tag-css">
          <img src="./images/Tag (5).png">
        </div>

        <div class="work2tag-bootstrap">
          <img src="./images/Tag (6).png">
        </div>
      
     </div>
     <div class="hide-desk">
     <div class="work2btn-2-div-2">
      <div class="work2btn-div">
        <button class="work2-btn">See project</button>
      </div>
     </div>
    </div>
    </div>

    <div class="work2img-3">
      
      
      <div class="work2-content-2">
        <h2 id="mobile-title">Profesional Art <br /> Printing Data</h2>
        <p id="mobile-para">A daily selection of privately <br />personalized reads; no accounts or <br />sign-ups required. Has been the <br />industry's standard.</p>
        <h2 id="desktop-title-3">
          Website Portfolio </h2>
          <p id="desktop-para">A daily selection of privately personalized <br />reads; no accounts or sign-ups required. <br />Has been the industry's standard.</p>
      </div>

     <div class="work2tag">
        <div class="work2tag-html">
          <img src="./images/Tag (4).png">
        </div>

        <div class="work2tag-css">
          <img src="./images/Tag (5).png">
        </div>

        <div class="work2tag-bootstrap">
          <img src="./images/Tag (6).png">
        </div>
         
     </div>
     <div class="hide-desk">
      <div class="work2btn-2-div-2">
       <div class="work2btn-div">
         <button class="work2-btn">See project</button>
       </div>
      </div>
     </div>
   
    </div>

    <div class="work2img-4">
      <div class="work2-content-2">
        <h2 id="mobile-title">Profesional Art <br /> Printing Data</h2>
        <p id="mobile-para">A daily selection of privately <br />personalized reads; no accounts or <br />sign-ups required. Has been the <br />industry's standard.</p>
        <h2 id="desktop-title-4">
          Profesional Art <br /> Printing Data </h2>
          <p id="desktop-para-4">A daily selection of privately personalized <br />reads; no accounts or sign-ups required. <br />Has been the industry's standard.</p>
      </div>

     <div class="work2tag">
        <div class="work2tag-html">
          <img src="./images/Tag (4).png">
        </div>

        <div class="work2tag-css">
          <img src="./images/Tag (5).png">
        </div>

        <div class="work2tag-bootstrap">
          <img src="./images/Tag (6).png">
        </div>
        
     </div>
     <div class="hide-desk">
      <div class="work2btn-2-div-2">
       <div class="work2btn-div">
         <button class="work2-btn">See project</button>
       </div>
      </div>
     </div>
    </div>

    <div class="work2img-5">
      <div class="work2-content-2">
        <h2 id="mobile-title">Profesional Art <br /> Printing Data</h2>
        <p id="mobile-para">A daily selection of privately <br />personalized reads; no accounts or <br />sign-ups required. Has been the <br />industry's standard.</p>
        <h2 id="desktop-title">
          Data Dashboard <br /> Healthcare</h2>
          <p id="desktop-para">A daily selection of privately personalized <br />reads; no accounts or sign-ups required. <br />Has been the industry's standard.</p>
      </div>
     <div class="work2tag">
        <div class="work2tag-html">
          <img src="./images/Tag (4).png">
        </div>

        <div class="work2tag-css">
          <img src="./images/Tag (5).png">
        </div>

        <div class="work2tag-bootstrap">
          <img src="./images/Tag (6).png">
        </div>
       
        
     </div>
     <div class="hide-desk">
      <div class="work2btn-2-div-2">
       <div class="work2btn-div">
         <button class="work2-btn">See project</button>
       </div>
      </div>
     </div>
    </div>

    <div class="work2img-6">
      <div class="work2-content-2">
        <h2 id="mobile-title">Profesional Art <br /> Printing Data</h2>
        <p id="mobile-para">A daily selection of privately <br />personalized reads; no accounts or <br />sign-ups required. Has been the <br />industry's standard.</p>
        <h2 id="desktop-title-3">
          Website Portfolio </h2>
          <p id="desktop-para">A daily selection of privately personalized <br />reads; no accounts or sign-ups required. <br />Has been the industry's standard.</p>
      </div>

     <div class="work2tag">
        <div class="work2tag-html">
          <img src="./images/Tag (4).png">
        </div>

        <div class="work2tag-css">
          <img src="./images/Tag (5).png">
        </div>

        <div class="work2tag-bootstrap">
          <img src="./images/Tag (6).png">
        </div>
       
        
     </div>
     <div class="hide-desk">
      <div class="work2btn-2-div-2">
       <div class="work2btn-div">
         <button class="work2-btn">See project</button>
       </div>
      </div>
     </div>
    </div>
  </div>
  `;
  dynProj.appendChild(section);
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
};

document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const email = emailInput.value;

  if (email === email.toLowerCase()) {
    document.getElementById('error').style.display = 'none';
  } else {
    document.getElementById('error').textContent = 'Email must be in lowercase.';
    document.getElementById('error').style.display = 'block';
    return;
  }
});

function saveFormData() {
  const form = document.getElementById('contact-form');
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  localStorage.setItem('formData', JSON.stringify(data));
}

function loadFormData() {
  const form = document.getElementById('contact-form');
  const savedData = localStorage.getItem('formData');
  if (savedData) {
    const data = JSON.parse(savedData);
    for (let key in data) {
      if (form.elements[key]) {
        form.elements[key].value = data[key];
      }
    }
  }
}

document.getElementById('contact-form').addEventListener('change', saveFormData);

window.addEventListener('load', loadFormData);