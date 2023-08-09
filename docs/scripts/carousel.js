const carouselCardMargin = 380;
let currentSlide = 1;
const container = document.querySelector('.carousel');

function doForwardSlide() {
  const newFirstCard = document.querySelector('.carousel-card:first-child');
  newFirstCard.style.marginLeft = carouselCardMargin + 'px';
  container.insertBefore(newFirstCard, container.lastChild);
  newFirstCard.style.marginLeft = '0';
}

function doBackSlide() {
  const newFirstCard = document.querySelector('.carousel-card:last-child');
  newFirstCard.style.marginRight = carouselCardMargin + 'px';
  container.insertBefore(newFirstCard, container.firstChild);
  newFirstCard.style.marginRight = '0';
}