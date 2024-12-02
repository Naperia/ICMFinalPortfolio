document.querySelector('.container').addEventListener('click', function() {
  this.classList.add('split-active');
  
  setTimeout(() => {
      document.getElementById('portfolio-menu').classList.add('visible');
      document.querySelector('.container').style.display = 'none';
  }, 800);
});