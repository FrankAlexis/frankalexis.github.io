import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/frankalexis', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/frankalexis', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'castrillonfrank114@mail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/frankalexis/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/frankalexis',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
