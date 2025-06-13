document.addEventListener('DOMContentLoaded', () => {
  const yearPara = document.getElementById('year');
  const year = new Date().getFullYear();
  yearPara.textContent = `© ${year} Cy`;
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector('.carousel');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  

  const gap = 24; 
  const item = document.querySelector('.carousel-item');
  const itemWidth = item.offsetWidth + gap;

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: itemWidth, behavior: 'smooth' });
  });
});