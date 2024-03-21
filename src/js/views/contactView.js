import View from './View.js';

class contactView extends View {
  #parentElement = document.querySelector('form');

  constructor() {
    super();
    this.#addSubmitListener();
  }

  #addSubmitListener() {
    const handleSubmit = e => {
      e.preventDefault();
      const myForm = document.getElementById('#contact');
      const formData = new FormData(myForm);
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => console.log('Form successfully submitted'))
        .catch(error => alert(error));
    };

    this.#parentElement.addEventListener('submit', handleSubmit);
  }
}

export default new contactView();
