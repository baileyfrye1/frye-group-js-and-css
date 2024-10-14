export default function formVal() {
  const form = document.querySelector('.contact-form');
  const firstName = document.querySelector('#first');
  const lastName = document.querySelector('#last');
  const email = document.querySelector('#email');
  const error = document.querySelector('.error');
  const input = document.querySelector('input[name = "tags"]');
  const giveaway = document.querySelector('a[href = "/giveaway"]');
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  firstName.addEventListener('keydown', (e) => {
    firstName.style.border = '1px solid green';
  });

  lastName.addEventListener('keydown', (e) => {
    lastName.style.border = '1px solid green';
  });

  email.addEventListener('keydown', (e) => {
    if (email.value.match(pattern)) {
      email.style.border = '1px solid green';
    }
  });

  giveaway
    ? input.setAttribute('value', '7753063,7753915')
    : input.setAttribute('value', '7753063');

  form.addEventListener('submit', (e) => {
    let messages = [];

    if (firstName.value === '' || firstName.value === null) {
      messages.push('First name is required');
      firstName.style.border = '1px solid red';
    } else if (lastName.value === '' || lastName.value === null) {
      messages.push('Last name is required');
      lastName.style.border = '1px solid red';
    } else if (!email.value.match(pattern)) {
      messages.push('Email is invalid');
      email.style.border = '1px solid red';
    }

    if (messages.length > 0) {
      e.preventDefault();
      error.innerText = messages.join(', ');
    }
  });
}
