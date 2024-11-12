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
