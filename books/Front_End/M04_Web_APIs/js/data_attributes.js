document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', function() {
      if (!this.classList.contains('revealed')) {
          this.classList.add('revealed');
          this.innerHTML = this.getAttribute('data-number');
      }
  });
});
