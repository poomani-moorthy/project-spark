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
// reserve

const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const person = document.getElementById('person').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  if (person && date && time) {
    alert(
      `Thank you for your message.it has been sent.`
      // `Reservation Details:\nDate: ${person}\nNumber of Persons: ${date}\nTime: ${time}`
    );
  } else {
    alert('Please fill in all fields.');
  }
});
