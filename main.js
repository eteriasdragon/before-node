import './style.scss';
import './scripts/provision/provision.js';
import './scripts/scrollbar';
import './scripts/form/submit-form.js';
import './scripts/blog/blog-observer';
import './scripts/form/congrats/animation';
import './scripts/slider/slider';
import './scripts/footer/copyright.js';
import './scripts/drag-and-drop/draggable.js';
import './scripts/common/close-window.js';
import './scripts/news/getNews';

window.addEventListener('load', showLoader);

function showLoader() {
  const loader = document.querySelector('.loader-wrapper');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    loader.remove();
    document.body.style.overflow = 'visible';
  }, 5000);
}