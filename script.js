const öppnaKnappar = document.querySelectorAll('[data-target]');

öppnaKnappar.forEach(knapp => {
  knapp.addEventListener('click', () => {
    const targetId = knapp.getAttribute('data-target');
    const dialogLapp = document.getElementById(targetId);
    
    if (dialogLapp) {
    
      dialogLapp.show(); 
    }
  });
});

const stängKnappar = document.querySelectorAll('.stang-lapp');

stängKnappar.forEach(knapp => {
  knapp.addEventListener('click', () => {
    const dialogLapp = knapp.closest('dialog');
    if (dialogLapp) {
      dialogLapp.close();
    }
  });
});