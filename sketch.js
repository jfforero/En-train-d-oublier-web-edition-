let active1 = false;
let scrollerMiddle1;

// Image filenames
const imageFilenames = [
  'tren1b.jpg','tren2b.jpg','tren3b.jpg','tren4b.jpg','tren5b.jpg',
  'tren6b.jpg','tren8b.jpg','tren9b.jpg','tren10b.jpg','tren11b.jpg'
];

const imageFilenames_inicio = [
  'tren01.jpg','tren02.jpg','tren03.jpg','tren04.jpg','tren05.jpg','tren06.jpg'
];

document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.wrapper');
  scrollerMiddle1 = document.querySelector('.scroller-middle');

  // Set a single random image for each layer
  setRandomImage('.bottom', imageFilenames);
  setRandomImage('.middle', imageFilenames_inicio);

  // Mouse events for scroller
  scrollerMiddle1.addEventListener('mousedown', () => {
    active1 = true;
    scrollerMiddle1.classList.add('scrolling');
  });

  document.body.addEventListener('mouseup', () => {
    active1 = false;
    scrollerMiddle1.classList.remove('scrolling');
  });

  document.body.addEventListener('mouseleave', () => {
    active1 = false;
    scrollerMiddle1.classList.remove('scrolling');
  });

  document.body.addEventListener('mousemove', (e) => {
    if (!active1) return;
    const x = e.pageX - wrapper.getBoundingClientRect().left;
    scrollIt(x);
  });

  // Initialize scroller in the middle
  scrollIt(wrapper.offsetWidth / 2);

  // Resize handling
  window.addEventListener('resize', () => {
    const middleWidth = document.querySelector('.middle').offsetWidth;
    scrollIt(middleWidth);
  });
});

// Function to set a single random image at the center
function setRandomImage(layerSelector, images) {
  const layer = document.querySelector(layerSelector);

  const randomIndex = Math.floor(Math.random() * images.length);
  const img = document.createElement('img');
  img.src = images[randomIndex];
  img.style.position = 'absolute';
  img.style.top = '50%';
  img.style.left = '50%';
  img.style.transform = 'translate(-50%, -50%)';
  img.style.width = '80%';   // adjust size as needed
  img.style.height = 'auto';
  img.draggable = false;

  // Clear existing image and append new
  layer.innerHTML = '';
  layer.appendChild(img);
}

// Function to scroll the middle layer
function scrollIt(x) {
  const wrapper = document.querySelector('.wrapper');
  const transform = Math.max(0, Math.min(x, wrapper.offsetWidth));

  document.querySelector('.middle').style.width = transform + "px";
  scrollerMiddle1.style.left = transform - scrollerMiddle1.offsetWidth / 2 + "px";
}
