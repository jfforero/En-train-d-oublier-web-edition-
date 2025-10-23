let active = false;
let scroller;

// Image filenames
const imageFilenames = [
  'tren1b.jpg','tren2b.jpg','tren3b.jpg','tren4b.jpg','tren5b.jpg',
  'tren6b.jpg','tren8b.jpg','tren9b.jpg','tren10b.jpg','tren11b.jpg'
];

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.wrapper');
  const image = document.getElementById('centerImage');
  scroller = document.querySelector('.scroller-middle');

  // Set initial random image
  setRandomImage();

  // Mouse events for scroller
  scroller.addEventListener('mousedown', () => {
    active = true;
    scroller.classList.add('scrolling');
  });

  document.body.addEventListener('mouseup', () => {
    active = false;
    scroller.classList.remove('scrolling');
  });

  document.body.addEventListener('mouseleave', () => {
    active = false;
    scroller.classList.remove('scrolling');
  });

  document.body.addEventListener('mousemove', (e) => {
    if (!active) return;
    const x = e.pageX - wrapper.getBoundingClientRect().left;
    moveScroller(x);
  });

  // Initialize scroller in the center
  moveScroller(wrapper.offsetWidth / 2);

  // Update scroller on window resize
  window.addEventListener('resize', () => {
    moveScroller(wrapper.offsetWidth / 2);
  });
});

// Set random image
function setRandomImage() {
  const randomIndex = Math.floor(Math.random() * imageFilenames.length);
  document.getElementById('centerImage').src = imageFilenames[randomIndex];
}

// Move scroller horizontally
function moveScroller(x) {
  const wrapper = document.querySelector('.wrapper');
  const scrollerWidth = scroller.offsetWidth;
  const maxX = wrapper.offsetWidth - scrollerWidth;

  const transform = Math.max(0, Math.min(x - scrollerWidth / 2, maxX));
  scroller.style.left = transform + "px";
}
