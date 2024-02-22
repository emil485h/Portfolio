document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button[data-filter]');
  const items = document.querySelectorAll('.column');
  const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');
    
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  

  function filterItems(e) {
    const filter = e.target.getAttribute('data-filter');

    // Opdater aktive knapper
    buttons.forEach(button => {
      if(button === e.target) {
        button.classList.add('active-button'); // Brug din custom klasse her
      } else {
        button.classList.remove('active-button'); // Sørg for kun den aktive knap har denne klasse
      }
    });

    // Vis eller skjul elementer
    items.forEach(item => {
      if(filter === 'all') {
        item.style.display = '';
      } else {
        if(item.classList.contains(filter)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      }
    });
  }

  // Tilføj klik event listener til hver knap
  buttons.forEach(button => {
    button.addEventListener('click', filterItems);
  });
});