import View from './VIew.js';

class sectionView extends View {
  #navLinks = document.querySelector('.nav-scroll');
  #navLogo = document.querySelector('.nav-logo');
  #contactButton = document.querySelector('.about__description-contact');
  #allSections = document.querySelectorAll('.section');
  #allProjects = document.querySelectorAll('.projects__project');

  constructor() {
    super();
    this.#addScrollingContact();
    this.#addReveal();
    this.#addRevealProjects();
    this.#addScrollingNav();
    this.#addScrollingNavLogo();
  }

  #addScrollingNav = () => {
    this.#navLinks.addEventListener('click', function (e) {
      e.preventDefault();
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    });
  };

  #addScrollingNavLogo = () => {
    this.#navLogo.addEventListener('click', function (e) {
      e.preventDefault();
      const id = e.currentTarget.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    });
  };

  #addScrollingContact = () => {
    this.#contactButton.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
  };

  #addReveal = () => {
    const revealSection = (entries, observer) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.classList.remove('hidden');
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.2,
    });

    this.#allSections.forEach(function (section) {
      if (section.getAttribute('id') === 'projects') return;
      sectionObserver.observe(section);
      section.classList.add('hidden');
    });
  };

  #addRevealProjects = () => {
    const margin = window.innerWidth < 991 ? '-200px' : '50px';
    const revealSection = (entries, observer) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.classList.remove('hidden');
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.2,
      rootMargin: margin,
    });

    this.#allProjects.forEach(function (project) {
      sectionObserver.observe(project);
      project.classList.add('hidden');
    });
  };
}

export default new sectionView();
