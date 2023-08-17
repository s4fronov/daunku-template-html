const containers = document.querySelectorAll('.carousel-content');
let container = containers[0];

function selectCarousel(a) {
  container = containers[a];
}

function doForwardSlide() {
  const newFirstCard = container.querySelector('.carousel-card:first-child');
  container.insertBefore(newFirstCard, container.lastChild);
  newFirstCard.style.marginLeft = '0';
}

function doBackSlide() {
  const newFirstCard = container.querySelector('.carousel-card:last-child');
  container.insertBefore(newFirstCard, container.firstChild);
  newFirstCard.style.marginRight = '0';
}