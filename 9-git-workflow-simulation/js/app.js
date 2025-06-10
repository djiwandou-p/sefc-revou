document.getElementById('colorBtn').onclick = function() {
    document.body.style.background = '#e0f7fa';
  };

  document.getElementById('darkModeBtn').onclick = function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
  };