const swiper = new Swiper('.mySwiper', {
  spaceBetween: 10,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesProgress: true,
});

const swiper2 = new Swiper('.mySwiper2', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});

const openBtn = document.querySelector('.btn-open');
const closeBtn = document.querySelector('.btn-close');

openBtn.addEventListener('click', () => {
  const lightbox = document.querySelector('.lightbox');
  lightbox.classList.add('open');
  lightbox.classList.remove('close');

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const lightbox = document.querySelector('.lightbox');

      lightbox.classList.add('close');
      lightbox.classList.remove('open');
    }
  });
});

closeBtn.addEventListener('click', () => {
  const lightbox = document.querySelector('.lightbox');

  lightbox.classList.add('close');
  lightbox.classList.remove('open');
});
