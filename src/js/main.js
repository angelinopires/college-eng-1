const submit = document.querySelector('.form-control .form__button');
const requests = Array.from(document.querySelectorAll('.request-list .request'));
const modal = document.querySelector('.modal');

console.log(requests);


if (submit) {
  submit.addEventListener('click', () => window.location.href = "/solicitar.html");
}

if (requests) {
  requests.map(request => {
    request.addEventListener('click', () => {

      if (modal) {
        modal.classList.toggle('show');
      }
    });
  })
}

if (modal) {
  modal.addEventListener('click', () => modal.classList.toggle('show'));
}
