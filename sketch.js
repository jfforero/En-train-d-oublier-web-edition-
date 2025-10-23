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

  // Set initial random images
  setRandomImages();

  // Mouse events for scroller
  scrollerMiddle1.addEventListener('mousedown', function () {
    active1 = true;
    scrollerMiddle1.classList.add('scrolling');
  });

  document.body.addEventListener('mouseup', function () {
    active1 = false;
    scrollerMiddle1.classList.remove('scrolling');
  });

  document.body.addEventListener('mouseleave', function () {
    active1 = false;
    scrollerMiddle1.classList.remove('scrolling');
  });

  document.body.addEventListener('mousemove', function (e) {
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

// Function to set random background images
function setRandomImages() {
  const randomIndex1 = Math.floor(Math.random() * imageFilenames.length);
  const randomIndex2 = Math.floor(Math.random() * imageFilenames_inicio.length);

  document.querySelector('.bottom').style.backgroundImage = `url(${imageFilenames[randomIndex1]})`;
  document.querySelector('.middle').style.backgroundImage = `url(${imageFilenames_inicio[randomIndex2]})`;
}

// Function to scroll the middle layer
function scrollIt(x) {
  const wrapper = document.querySelector('.wrapper');
  const transform = Math.max(0, Math.min(x, wrapper.offsetWidth));

  document.querySelector('.middle').style.width = transform + "px";
  scrollerMiddle1.style.left = transform - scrollerMiddle1.offsetWidth / 2 + "px";
}
