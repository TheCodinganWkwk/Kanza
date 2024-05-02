const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

// Counter
let counter = 1;
const size = images[0].clientWidth;

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

// Button listeners
document.getElementById('prevBtn').addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter--;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

document.getElementById('nextBtn').addEventListener('click', () => {
  if (counter >= images.length - 1) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});
