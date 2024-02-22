document.addEventListener('DOMContentLoaded', function() {

    // Få alle filtreringsknapper
    var filterButtons = document.querySelectorAll('.filter-btn');
  
    // Gennemgå hver knap og tilføj klikhændelse
    filterButtons.forEach(function(button) {
  
      button.addEventListener('click', function() {
        
        // Fjern 'active' klassen fra alle knapper
        filterButtons.forEach(function(button) {
          button.classList.remove('active');
        });
  
        // Tilføj 'active' klassen til den klikkede knap
        button.classList.add('active');
  
        // Få filterværdien fra data-filter attributten
        var filterValue = button.getAttribute('data-filter');
  
        // Få alle portfolio-items
        var portfolioItems = document.querySelectorAll('.portfolio-item');
  
        // Vis eller skjul elementer baseret på filterværdien
        portfolioItems.forEach(function(item) {
          if (filterValue === 'all') {
            item.style.display = '';
          } else {
            if (item.classList.contains(filterValue)) {
              item.style.display = '';
            } else {
              item.style.display = 'none';
            }
          }
        });
  
      });
    });
  
  });
  