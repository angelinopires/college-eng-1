const submit = document.querySelector('.form-control .form__button');
const requests = Array.from(document.querySelectorAll('.request-list .request'));
const modalList = document.querySelector('.modal');
const modalFeedback = document.querySelector('.modal--feedback');
const costumerAdd = document.querySelector('.costumer--add');
const costumerForm = document.querySelector('.costumer--form');
const costumerConfirm = document.querySelector('.costumer--confirm');

// buttons
const add = document.querySelector('#add');
const confirm = document.querySelector('#confirm');
const openFeedback = document.querySelector('#open-modal');
const closeFeedback = document.querySelector('#close-modal');
const send = document.querySelector('#send');

if (submit) {
  submit.addEventListener('click', () => window.location.href = "/solicitar.html");
}

if (requests) {
  requests.map(request => {
    request.addEventListener('click', () => {

      if (modalList) {
        modalList.classList.toggle('show');
      }
    });
  })
}

if (modalList) {
  modalList.addEventListener('click', () => modalList.classList.toggle('show'));
}

if (openFeedback) {
  openFeedback.addEventListener('click', () => modalFeedback.classList.toggle('show'));
}

if (closeFeedback) {
  closeFeedback.addEventListener('click', () => modalFeedback.classList.toggle('show'));
}

if (add) {
  add.addEventListener('click', () => {
    if (costumerForm.classList.contains('hidden')) {
      costumerAdd.classList.toggle('hidden');
      costumerForm.classList.toggle('hidden');
    }
  });
}

if (confirm) {
  confirm.addEventListener('click', () => {
    if (costumerConfirm.classList.contains('hidden')) {
      costumerForm.classList.toggle('hidden');
      costumerConfirm.classList.toggle('hidden');
    }
  });
}

if (send) {
  send.addEventListener('click', () => modalFeedback.classList.toggle('show'));
}

