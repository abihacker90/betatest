

  const hamburger = document.getElementById('hamburger');

  const navUl = document.getElementById('navul');

  hamburger.addEventListener('click', () => {
      navUl.classList.toggle('show');
  });