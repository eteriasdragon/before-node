const scrollBar = document.querySelector('.header__scrollbar');
const windowHeight = window.innerHeight;
const pageHeight = document.body.clientHeight;

window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  scrollBar.style.width = `${scrollTop / (pageHeight - windowHeight) * 100}%`;
});


function scrollToSectionWithOffset(event) {
  event.preventDefault();

  const targetSection = document.querySelector(event.target.getAttribute('href'));
  const sectionTop = targetSection.getBoundingClientRect().top + window.pageYOffset;
  const headerOffset = 190;

  window.scrollTo({
    top: sectionTop - headerOffset,
    behavior: 'smooth'
  });
}

const anchorLinks = document.querySelectorAll('.header__nav a');

anchorLinks.forEach(link => {
  link.addEventListener('click', scrollToSectionWithOffset);
});