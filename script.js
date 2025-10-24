// Basic client-side script for True Vow scaffold
console.log('True Vow scaffold loaded');

// Add simple DOM-ready helper
document.addEventListener('DOMContentLoaded', ()=>{
  const p = document.querySelector('main p');
  if(p) p.insertAdjacentHTML('beforeend', ' — client script active.');
});
