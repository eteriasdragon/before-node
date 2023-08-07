const blogWrapper = document.querySelector('.blog-section__blog-wrapper');
const blogPosts = blogWrapper.querySelectorAll('.blog-post');

const options = {
  root: null,
  rootMargin: '300px',
  threshold: 0.8,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    [...blogPosts].forEach(blog => {
      if(entry.isIntersecting) {
        blog.style.opacity = 1;
        blog.style.bottom = 0;
      } else {
        blog.style.opacity = 0;
        blog.style.bottom = '-100px';
      }

    })
  });
}, options);

observer.observe(blogWrapper);