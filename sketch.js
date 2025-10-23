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

  // Set multiple random images
  setRandomImagesLayer('.bottom', imageFilenames, 5);
  setRandomImagesLayer('.middle', imageFilenames_inicio, 5);

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

// Function to populate a layer with multiple random images
function setRandomImagesLayer(layerSelector, images, count) {
  const layer = document.querySelector(layerSelector);
  layer.innerHTML = ''; // Clear existing images

  for (let i = 0; i < count; i++) {
    const img = document.createElement('img');
    const randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
    img.style.position = 'absolute';
    img.style.width = `${50 + Math.random() * 150}px`; // random width
    img.style.height = 'auto';
    img.style.top = `${Math.random() * 100}%`;
    img.style.left = `${Math.random() * 100}%`;
    img.draggable = false;
    img.style.objectFit = 'cover';
    img.style.transform = `translate(-50%, -50%) rotate(${Math.random()*30-15}deg)`; // random rotation
    layer.appendChild(img);
  }
}

// Function to scroll the middle layer
function scrollIt(x) {
  const wrapper = document.querySelector('.wrapper');
  const transform = Math.max(0, Math.min(x, wrapper.offsetWidth));

  document.querySelector('.middle').style.width = transform + "px";
  scrollerMiddle1.style.left = transform - scrollerMiddle1.offsetWidth / 2 + "px";
}
