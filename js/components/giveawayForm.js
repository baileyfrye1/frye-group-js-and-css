const giveaway = document.querySelector('a[href="/giveaway"]');
const input = document.querySelector('input[name="tags"]');
const email = document.querySelector('#email');
const emailHash = Date.now();
const phone = document.querySelector('#phone');
const emailStyles = window.getComputedStyle(email);
const winners = ['(615) 878-5889'];

if (emailStyles.getPropertyValue('display') === 'none') {
  email.value = `giveaway-${emailHash}@giveaway.com`;
}

// FUNCTIONS
const formVal = () => {
  const form = document.querySelector('.contact-form');
  const firstName = document.querySelector('#first');
  const lastName = document.querySelector('#last');
  const error = document.querySelector('.error');
  const contactContent = document.querySelector('#contact-content');
  const formText = document.querySelector('.form-text');
  const sectionTitle = document.querySelector('.section-title');
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const h1 = document.createElement('h1');
  h1.classList.add('success-text');
  h1.innerText = 'Thank you for subscribing to our giveaway! The winner will be contacted via SMS on 1/8';

  firstName.addEventListener('keydown', () => {
    firstName.style.border = '1px solid green';
  });

  lastName.addEventListener('keydown', () => {
    lastName.style.border = '1px solid green';
  });

  email.addEventListener('keydown', () => {
    if (email.value.match(pattern)) {
      email.style.border = '1px solid green';
    }
  });

  phone.addEventListener('keydown', () => {
    console.log(phone.value.length);
    if (phone.value.length === 13) {
      phone.style.border = '1px solid green';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let messages = [];

    if (winners.includes(phone.value)) {
      input.setAttribute('value', '7753063,7753915,7758907');
    }
    if (firstName.value === '' || firstName.value === null) {
      messages.push('First name is required');
      firstName.style.border = '1px solid red';
    } else if (lastName.value === '' || lastName.value === null) {
      messages.push('Last name is required');
      lastName.style.border = '1px solid red';
    } //else if (!email.value.match(pattern)) {
    //messages.push('Email is invalid')
    //email.style.border = "1px solid red";}
    else if (phone.value === '' || phone.value === null) {
      messages.push('Phone Number is required');
    } else {
      form.style.opacity = '0';
      formText.style.opacity = '0';
      sectionTitle.style.opacity = '0';
      contactContent.appendChild(h1);
      setTimeout(() => {
        form.submit();
      }, 5000);
    }

    if (messages.length > 0) {
      e.preventDefault();
      error.innerText = messages.join(', ');
    }
  });
};

const phoneFormat = () => {
  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };
  const phoneNumberFormatter = () => {
    const formattedInputValue = formatPhoneNumber(phone.value);
    phone.value = formattedInputValue;
  };
  phone.addEventListener('input', phoneNumberFormatter);
};

const app = () => {
  phoneFormat();
  formVal();
};

app();
