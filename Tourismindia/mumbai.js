
window.addEventListener('scroll', () => {
  const nav = document.querySelector('#navbar');
  if (window.scrollY > 0) {
      nav.classList.add('navbar');
      nav.classList.remove('bg-transparent');
  } else {
      nav.classList.remove('navbar');
      nav.classList.add('bg-transparent');
  }
});
const slides = document.querySelector('.slides');
  const slide = document.querySelectorAll('.Slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let currentIndex = 0;

  
  function updateSlider() {
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
  }

  
  next.addEventListener('click', () => {
    if (currentIndex < slide.length - 1) {
      currentIndex++;
      updateSlider();
    } else {
      currentIndex = 0; 
      updateSlider();
    }
  });

  
  prev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    } else {
      currentIndex = slide.length - 1; 
      updateSlider();
    }
  });
