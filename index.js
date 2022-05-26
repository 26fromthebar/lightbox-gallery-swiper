const swiper = new Swiper('.thumbsSwiper', {
  spaceBetween: 10,
  slidesPerView: '4',
  freeMode: true,
  watchSlidesProgress: true,
});

const swiper2 = new Swiper('.gallerySwiper', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});

const openBtn = document.querySelector('.btn-lightbox-open');
const closeBtn = document.querySelector('.btn-lightbox-close');

openBtn.addEventListener('click', () => {
  const lightbox = document.querySelector('.lightbox');
  lightbox.classList.add('lightbox-open');
  lightbox.classList.remove('lightbox-close');

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightbox.classList.add('lightbox-close');
      lightbox.classList.remove('lightbox-open');
    }
  });
});

closeBtn.addEventListener('click', () => {
  const lightbox = document.querySelector('.lightbox');

  lightbox.classList.add('lightbox-close');
  lightbox.classList.remove('lightbox-open');
});
