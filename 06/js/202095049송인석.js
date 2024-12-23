const button = document.getElementById('bttn');
const nav = document.getElementById('nav');

button.addEventListener('click', () => { 
  nav.classList.toggle('active');
  button.classList.toggle('active');
});