window.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('nav ul li a');
    
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var target = this.getAttribute('href');
        var section = document.querySelector(target);
        var offsetTop = section.offsetTop;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });
  