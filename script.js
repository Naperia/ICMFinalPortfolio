document.querySelector('.scroll-link').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('portfolio-menu').scrollIntoView({ behavior: 'smooth' });
  });
  