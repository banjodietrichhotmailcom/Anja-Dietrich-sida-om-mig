const öppnaKnappar = document.querySelectorAll('[data-target]');
const lappContainer = document.querySelector('.lapp-container');

// 1. 🚀 EN GLOBAL RÄKNARE (Lägg till denna längst upp i filen)
let högstaZIndex = 20;

öppnaKnappar.forEach(knapp => {
  knapp.addEventListener('click', () => {
    const targetId = knapp.getAttribute('data-target');
    const dialogLapp = document.getElementById(targetId);
    
    if (dialogLapp) {
      
      if (dialogLapp.hasAttribute('open')) {
        
        dialogLapp.close();
      } else {
      
        dialogLapp.show(); 
        
        
        högstaZIndex++; 
        dialogLapp.style.zIndex = högstaZIndex; 
        
        if (lappContainer) {
          lappContainer.appendChild(dialogLapp);
        }
      }
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