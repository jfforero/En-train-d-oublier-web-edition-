let active = false;
let scrollerMiddle;

// Image filenames
const imageFilenames = [
  'tren1b.jpg','tren2b.jpg','tren3b.jpg','tren4b.jpg','tren5b.jpg',
  'tren6b.jpg','tren8b.jpg','tren9b.jpg','tren10b.jpg','tren11b.jpg'
];

const imageFilenames_inicio = [
  'tren01.jpg','tren02.jpg','tren03.jpg','tren04.jpg','tren05.jpg','tren06.jpg'
];

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.wrapper');
  scrollerMiddle = document.querySelector('.scroller-middle');

  // Set initial random images
  setRandomImages();

  // Mouse events for scroller
  scrollerMiddle.addEventListener('mousedown', () => {
    active = true;
    scrollerMiddle.classList.add('scrolling');
  });

  document.body.addEventListener('mouseup', () => {
    active = false;
    scrollerMiddle.classList.remove('scrolling');
  });

  document.body.addEventListener('mouseleave', () => {
    active = false;
    scrollerMiddle.classList.remove('scrolling');
  });

  document.body.addEventListener('mousemove', (e) => {
    if (!active) return;
    const x = e.pageX - wrapper.getBoundingClientRect().left;
    scrollIt(x);
  });

  // Initialize scroller in the middle
  scrollIt(wrapper.offsetWidth / 2);

  // Handle window resize
  window.addEventListener('resize', () => {
    const middleWidth = document.querySelector('.middle').offsetWidth;
    scrollIt(middleWidth);
  });
});

// Function to set random background images
function setRandomImages() {
  const randomIndex1 = Math.floor(Math.random() * imageFilenames.length);
  const randomIndex2 = Math.floor(Math.random() * imageFilenames_inicio.length);

  document.querySelector('#image1').src = imageFilenames[randomIndex1];
  document.querySelector('#image2').src = imageFilenames_inicio[randomIndex2];
}

// Function to scroll the middle layer
function scrollIt(x) {
  const wrapper = document.querySelector('.wrapper');
  const middleLayer = document.querySelector('.middle');

  // Prevent scroller from going outside wrapper
  const transform = Math.max(0, Math.min(x, wrapper.offsetWidth));
  middleLayer.style.width = transform + "px";

  // Adjust scroller position
  scrollerMiddle.style.left = transform - scrollerMiddle.offsetWidth / 2 + "px";
}
