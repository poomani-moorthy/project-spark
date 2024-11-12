document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const overlay = document.getElementById('overlay');

  menuIcon.addEventListener('click', function () {
    overlay.style.display = 'flex';
  });

  overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
  });
});
//
// events form
const eventForm = document.getElementById('eventForm');
eventForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;
  // valid name
  const name = document.getElementById('name').value;
  const nameError = document.getElementById('nameError');
  if (!name) {
    nameError.textContent = 'Name is required';
    nameError.style.display = 'block';
    valid = false;
  } else {
    nameError.style.display = 'none';
  }
  // valid email
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');
  if (!email) {
    emailError.textContent = 'email is required';
    emailError.style.display = 'block';
    valid = false;
  } else {
    emailError.style.display = 'none';
  }
  //valid date
  const date = document.getElementById('date').value;
  const dateError = document.getElementById('dateError');
  if (!date) {
    dateError.textContent = 'date is required';
    dateError.style.display = 'block';
    valid = false;
  } else {
    dateError.style.display = 'none';
  }
  // validate phone number
  const phone = document.getElementById('phone').value;
  const phoneError = document.getElementById('phoneError');
  if (!phone) {
    phoneError.textContent = 'valid phone Number is required';
    phoneError.style.display = 'block';
    valid = false;
  } else {
    phoneError.style.display = 'none';
  }
  // validate event time
  const time = document.getElementById('time').value;
  const timeError = document.getElementById('timeError');
  if (!time) {
    timeError.textContent = 'Event time is required';
    timeError.style.display = 'block';
    valid = false;
  } else {
    timeError.style.display = 'none';
  }
  // validate event detail
  const details = document.getElementById('details').value;
  const detailsError = document.getElementById('detailsError');
  if (!details) {
    detailsError.textContent = 'details is required';
    detailsError.style.display = 'block';
    valid = false;
  } else {
    detailsError.style.display = 'none';
  }
  // If all fields are valid, show alert with event details
  if (valid) {
    alert(
      `Event Registration Details:\nName: ${name}\nEmail: ${email}\nDate: ${date}\nPhone: ${phone}\nTime: ${time}\nDetails: ${details} \nThank you for your message. It has been sent. `
    );
  }
});
