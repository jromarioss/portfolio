const btn = document.getElementById('button');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();

  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');

  const active = navbar.classList.contains('active');

  event.currentTarget.setAttribute('aria-expanded', active);

  if (active) {
    event.currentTarget.setAttribute('arial-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('arial-label', 'Abrir Menu');
  }
}
btn.addEventListener('click', toggleMenu);
btn.addEventListener('touchstart', toggleMenu);

/* o getElmentsByClassName não funcionou por isso tive que fazer varios ids */
let links = document.querySelector('#link-1');
links.addEventListener('click', function() {
  const navbar = document.getElementById('navbar');
  navbar.classList.remove('active');
});

let links1 = document.querySelector('#link-2');
links1.addEventListener('click', function() {
  const navbar = document.getElementById('navbar');
  navbar.classList.remove('active');
})

let links2 = document.querySelector('#link-3');
links2.addEventListener('click', function() {
  const navbar = document.getElementById('navbar');
  navbar.classList.remove('active');
})

let links3 = document.querySelector('#link-4');
links3.addEventListener('click', function() {
  const navbar = document.getElementById('navbar');
  navbar.classList.remove('active');
});

let links4 = document.querySelector('#link-5');
links4.addEventListener('click', function() {
  const navbar = document.getElementById('navbar');
  navbar.classList.remove('active');
});