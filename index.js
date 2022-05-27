const swiper = new Swiper('.thumbsSwiper', {
  spaceBetween: 10,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesProgress: true,
});

const swiper2 = new Swiper('.gallerySwiper', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.lightbox-btn-next',
    prevEl: '.lightbox-btn-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});

const openBtn = document.querySelector('.lightbox-btn-open');
const closeBtn = document.querySelector('.lightbox-btn-close');
const swiperWrapper = document.querySelector('.swiper-wrapper.ltbox');
const body = document.querySelector('body');

if (swiperWrapper.children.length !== 0) {
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
}
