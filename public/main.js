document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const allButton = document.querySelector('[data-filter="all"]'); // Særlig reference til 'All' knappen

    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Fjern fyldt baggrund fra alle knapper
        filterButtons.forEach(btn => {
          btn.classList.remove('bg-red-500', 'text-white'); // Fjern aktiv stil
          btn.classList.add('text-red-500', 'hover:bg-red-500', 'hover:text-white'); // Tilføj inaktiv stil
        });

        // Tilføj fyldt baggrund til den aktive knap
        this.classList.add('bg-red-500', 'text-white'); // Tilføj aktiv stil
        this.classList.remove('text-red-500', 'hover:bg-red-500', 'hover:text-white'); // Fjern inaktiv stil

        const filter = this.getAttribute('data-filter');
        const portfolioItems = document.querySelectorAll('.grid div');

        portfolioItems.forEach(item => {
          if (filter === 'all' || item.classList.contains(filter)) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  });